import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";


function parseaParams(argv): ContactsControllerOptions {
  
  const args = minimist(process.argv.slice(2), {
    number:["id"],    
    string: ["name"],
    
  });  
  console.log(args);
  return {
    action: null,
    params: null,
  };
}

function main() {
  
}

main();
