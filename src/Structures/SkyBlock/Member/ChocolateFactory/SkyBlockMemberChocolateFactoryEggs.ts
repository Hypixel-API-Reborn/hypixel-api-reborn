class SkyBlockMemberChocolateFactoryEggs {
  breakfast: number;
  lunch: number;
  dinner: number;
  brunch: number;
  dejeuner: number;
  supper: number;
  constructor(data: Record<string, any>) {
    this.breakfast = data?.breakfast || 0;
    this.lunch = data?.lunch || 0;
    this.dinner = data?.dinner || 0;
    this.brunch = data?.brunch || 0;
    this.dejeuner = data?.dejeuner || 0;
    this.supper = data?.supper || 0;
  }
}

export default SkyBlockMemberChocolateFactoryEggs;
