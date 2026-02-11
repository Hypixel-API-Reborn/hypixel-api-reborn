import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
class getRecentGames extends Endpoint {
    async execute(query, options) {
        if (!query)
            throw new Error(Errors.NO_NICKNAME_UUID);
        query = await this.client.requestHandler.toUUID(query);
        const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
        if (res.options.raw)
            return res;
        const games = res.data.games.map((x) => new RecentGame(x));
        return Object.assign(games, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getRecentGames;
//# sourceMappingURL=getRecentGames.js.map