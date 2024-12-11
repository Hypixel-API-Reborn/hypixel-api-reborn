class Perk {
  name: string;
  description: string;
  constructor(data: Record<string, any>) {
    this.name = data.name;
    this.description = data.description;
  }
}

export default Perk;
