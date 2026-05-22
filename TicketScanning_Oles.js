/* eslint-disable no-unused-vars */

// use-case: ticket scanning and access control

//               Observer (Behavioral Pattern)
class TicketScanningEvent {
  constructor() {
    this.observers = []; // store all listeners
  }
  // Add new listener to our eventListener
  add(observer) {
    this.observers.push(observer);
    return "Observer was added to event listener";
  }
  // Remove a listener from our eventListener
  remove(observer) {
    this.observers = this.observers.filter((ob) => ob !== observer);
    return "Observer was successfuly deleted from event listner";
  }
  // call all listeners
  // method is called by the proxy after passing validation;
  executeScan(ticket) {
    this.observers.forEach((observer) => observer(ticket));
  }
}
//          Proxy (Structural Pattern)
class TicketScannerProxy {
  // save our scanner and create for it ticketList to prevent duplicates
  constructor(scanner) {
    this.scanner = scanner;
    this.ticketList = [];
  }
  // ckeck if the ticket is already in the ticketList - block further actions
  scan(ticket) {
    if (this.ticketList.includes(ticket))
      return console.log(
        `[Proxy Access Denied]: Ticket ${ticket} has already been scanned.`,
      );
    this.ticketList.push(ticket);
    // if ticket is not in ticketList - start executing scan
    this.scanner.executeScan(ticket);
  }
}
// Event listeners
function gates(ticket) {
  return console.log(
    `Check if ticket ${ticket} exists in db and then open gates`,
  );
}
function updates(ticket) {
  return console.log(`Reporting updates to the server about ticket: ${ticket}`);
}
function logs(ticket) {
  return console.log(`Log: ${ticket} - ticket has been scanned`);
}

// creat Observer scanner and add functions listeners to it
let scanner = new TicketScanningEvent();
scanner.add(gates);
scanner.add(updates);
scanner.add(logs);

// wrap scanner in proxy turnstile
let turnstile = new TicketScannerProxy(scanner);
// calling methods through turnstile
turnstile.scan(123); // allowed
turnstile.scan(123); // denied
turnstile.scan("t-321"); // allowed
turnstile.scan("t-321"); // denied
