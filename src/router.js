import HomeMain from "@/components/HomeMain";
import HelloWorld from "@/components/HelloWorld";
import DataPassenger from "@/components/DataPassenger";
import DataFlights from "@/components/DataFlights";
import PaymentInf from "@/components/PaymentInf";
import AviaTicket from "@/components/AviaTicket";

export default [
    {path: '/about/:id', component: HomeMain},
    {path: '/tables', component: HelloWorld},
    {path: '/DataPassenger', component: DataPassenger},
    {path: '/DataFlights', component: DataFlights},
    {path: '/PaymentInf', component: PaymentInf},
    {path: '/AviaTicket', component: AviaTicket}
]