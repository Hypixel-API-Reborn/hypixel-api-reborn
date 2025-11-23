class BedWarsSlumberQuestNPC {
  doorMan: boolean;
  fredericFernton: boolean;
  generalDaku: boolean;
  hostessKatrina: boolean;
  hotelReceptionist: boolean;
  johnIndigos: boolean;
  ladySaichi: boolean;
  ticketMachine: boolean;
  constructor(data: Record<string, any>) {
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
