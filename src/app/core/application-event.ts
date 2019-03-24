export class ApplicationEvent {
  message: string;

  source: any;

  constructor(message: string, source: any) {
    this.message = message;
    this.source = source;
  }
}
