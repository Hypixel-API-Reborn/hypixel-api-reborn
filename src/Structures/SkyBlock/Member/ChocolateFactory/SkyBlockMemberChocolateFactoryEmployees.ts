class SkyBlockMemberChocolateFactoryEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
  constructor(data: Record<string, any>) {
    this.bro = data?.rabbit_bro || 0;
    this.cousin = data?.rabbit_cousin || 0;
    this.father = data?.rabbit_father || 0;
    this.grandma = data?.rabbit_grandma || 0;
    this.sis = data?.rabbit_sis || 0;
    this.dog = data?.rabbit_dog || 0;
    this.uncle = data?.rabbit_uncle || 0;
  }
}

export default SkyBlockMemberChocolateFactoryEmployees;
