const Candidate = require('./Candidate');

/**
 * SB Government Class
 */
class GovernmentData {
  /**
   * constructor
   * @param {Object} data
   * @example
   */
  constructor(data) {
    /**
     * Last time this resource was updated
     * @type {number}
     */
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    /**
     * Last time this resource was updated, as Date
     * @type {Date|null}
     */
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    const lastElectionResults = data.mayor.election.candidates.map((x) => new Candidate(x, x.name === data.mayor.name));
    /**
     * A map of last election results for each candidate
     * Sorted ascendingly by votes received
     * @type {Map<string, Candidate>}
     */
    this.lastElectionResults = new Map(
      lastElectionResults
        .sort((a, b) => a.votesReceived - b.votesReceived)
        .reverse()
        .map((x) => [x.name, x])
    );
    /**
     * The mayor
     * @type {Candidate}
     */
    this.mayor = this.lastElectionResults.get(data.mayor.name);
    /**
     * The year the mayor will be running for
     * @type {number}
     */
    this.runningYear = parseInt(data.mayor.election.year, 10) || 0;
    const thisElection = data.current?.candidates.map((x) => new Candidate(x, x.name === data.mayor.name)) || null;
    /**
     * Current elections, valid for next year
     * Sorted ascendingly by votes received
     * RESULTS MIGHT BE TEMPORARY
     * @type {Map<string, Candidate>|null}
     */
    this.currentElectionResults = thisElection
      ? new Map(
          thisElection
            .sort((a, b) => a.votesReceived - b.votesReceived)
            .reverse()
            .map((x) => [x.name, x])
        )
      : null;
    /**
     * The year the current election will be effective for
     * @type {number|null}
     */
    this.currentElectionFor = parseInt(data.current?.year, 10) || null;
  }
  /**
   * Current Mayor
   * @return {string}
   * @example
   */
  toString() {
    return this.mayor.name;
  }
}

module.exports = GovernmentData;
