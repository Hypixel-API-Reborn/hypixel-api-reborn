class BedWarsPracticeModeAttempts {
  failed: number;
  successful: number;
  total: number;
  constructor(data: Record<string, any>) {
    this.failed = data?.failed_attempts ?? 0;
    this.successful = data?.successful_attempts ?? 0;
    this.total = this.failed + this.successful;
  }
}

export default BedWarsPracticeModeAttempts;
