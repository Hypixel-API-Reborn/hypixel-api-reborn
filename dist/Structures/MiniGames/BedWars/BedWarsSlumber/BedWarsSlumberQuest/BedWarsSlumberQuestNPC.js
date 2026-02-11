class BedWarsSlumberQuestNPC {
    doorMan;
    fredericFernton;
    generalDaku;
    hostessKatrina;
    hotelReceptionist;
    johnIndigos;
    ladySaichi;
    ticketMachine;
    constructor(data) {
        this.doorMan = data?.DoorManNpc || false;
        this.fredericFernton = data?.FredericFerntonNpc || false;
        this.generalDaku = data?.GeneralDakuNpc || false;
        this.hostessKatrina = data?.HostessKatrinaNpc || false;
        this.hotelReceptionist = data?.HotelReceptionistNpc || false;
        this.johnIndigos = data?.JohnIndigosNpc || false;
        this.ladySaichi = data?.LadySaichiNpc || false;
        this.ticketMachine = data?.TicketMachineNpc || false;
    }
}
export default BedWarsSlumberQuestNPC;
//# sourceMappingURL=BedWarsSlumberQuestNPC.js.map