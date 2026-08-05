import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';
declare class DuelsUHC extends DuelsModeFull {
    doubles: DuelsMode;
    four: DuelsMode;
    meetup: DuelsMode;
    tournament: DuelsMode;
    constructor(data: Record<string, any>);
}
export default DuelsUHC;
//# sourceMappingURL=DuelsUHC.d.ts.map