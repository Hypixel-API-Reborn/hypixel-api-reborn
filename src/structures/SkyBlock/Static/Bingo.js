/**
 * Bingo class
 */
class Bingo {
  /**
   * Constructor
   * @param {Object} data data
   * @param {number} position Position
   */
  constructor(data, position = 0) {
    /**
     * Name of this bingo goal
     * @type {string}
     */
    this.name = data.name;
    /**
     * string ID (code name)
     * @type {string}
     */
    this.id = data.id;
    const [row, column] = parsePosition(position);
    /**
     * 1-indexed row
     * @type {number|null}
     */
    this.row = row;
    /**
     * 1-indexed colmun
     * @type {number|null}
     */
    this.column = column;
    /**
     * Bingo lore, with color codes
     * @type {string}
     */
    this.rawLore = data.lore;
    /**
     * Bingo lore in plain text
     * @type {string}
     */
    this.lore = data.lore?.replace?.(/§([1-9]|[a-l])|§/gm, '') || null;
    /**
     * Only available for TIERED bingos
     * Shows you the requirement for each tier of this achievement
     * @type {number[]}
     */
    this.tiers = Array.isArray(data.tiers) ? data.tiers.map((x) => parseInt(x, 10) || 0) : null;
    /**
     * Only available for TIERED bingos
     * Difference between each tier requirement, if it is constant
     * @type {number|null}
     */
    this.tierStep = this.#getTierStep();
    /**
     * Only available for ONE_TIERED bingos
     * @type {number|null}
     */
    this.requiredAmount = parseInt(data.requiredAmount, 10) ?? null;
    /**
     * Type of Bingo
     * ONE_TIME means the goal doesn't have a specific amount
     * ONE_TIER means the goal specifies 1 amount to achieve
     * TIERED means the goal specifies more than 1 amount to achieve
     * @type {'ONE_TIME'|'ONE_TIER'|'TIERED'}
     */
    this.type = this.tiers ? 'TIERED' : this.requiredAmount ? 'ONE_TIER' : 'ONE_TIME';
  }
  /**
   * As string
   * BEWARE this returns ID to assure compatibility with PlayerBingo
   * @return {string}
   */
  toString() {
    return this.id;
  }
  /**
   * Gets tier step, if constant
   * @private
   * @returns {number|null}
   */
  #getTierStep() {
    if (this.type !== 'TIERED') return null;
    // No step possible
    if (this.tiers.length < 2) return null;
    const hypotheticStep = this.tiers[1] - this.tiers[0];
    // Check if every 2 elements have the same step
    const isConstant = this.tiers.slice(1).every((el, index) => {
      return hypotheticStep === this.tiers[index - 1] - el;
    });
    if (!isConstant) return null;
    return hypotheticStep;
  }
}

// eslint-disable-next-line require-jsdoc
function parsePosition(position) {
  const x = (position % 5) + 1;
  const y = Math.floor(position / 5) + 1;
  return [x, y];
}

module.exports = Bingo;
