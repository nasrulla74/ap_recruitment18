/** @odoo-module */


import { registry } from "@web/core/registry"
//import { KpiCard } from "./kpi_card/kpi_card"
//import { RoomCard } from "./kpi_card/room_card"
import { useService } from "@web/core/utils/hooks"

const { Component, onWillStart, useRef, useState, onMounted } = owl


export class OwlRqDashboard extends Component {
    setup(){

        this.state = useState({
            db_today_data: {
                today_arr_count:0,
                today_dep_count:0,
                today_bithday_count:0,
                today_activity_count:0,
                tm_arr_count:0,
                tm_dep_count:0,
                tm_bithday_count:0,
                tm_activity_count:0,
                today_date: moment().format('YYYY-MM-DD'),
                today_date_front: moment().format('LL'),
//                moment().add(7, 'days'),
                tomorrow_date: moment().add(1, 'd').format('YYYY-MM-DD'),
                tomorrow_date_front: moment().add(1, 'd').format('LL'),
                tomorrow_date2: moment().add(1, 'd'),
                today_start: moment().startOf('day').format('YYYY-MM-DD'),
                today_end: moment().endOf('day').format('YYYY-MM-DD'),
                tm_start: moment().add(1, 'd').startOf('day').format('YYYY-MM-DD'),
                tm_end: moment().add(1, 'd').endOf('day').format('YYYY-MM-DD'),
                rooms:[],
                complaints:[],
                today_excursions:[],
                today_dinners:[],


            }
        })
        this.orm = useService("orm")
        this.actionService = useService("action")


        onWillStart(async ()=> {
//            await this.updateRoomSatus()
//            await this.getTodayArrCount()
//            await this.getTomorrowArrCount()
//            await this.getTodayDepCount()
//            await this.getTomorrowDepCount()
//            await this.getTodayBirthdays()
//            await this.getTodayActivityCount()
//            await this.getRooms()
//            await this.getComplaints()
//            await this.getTodayExcursions()
//            await this.getTodayDinners()
        })

    }

////    async getTodayArrCount(){
////        let domain = [['is_booking', '=', true], ['bk_state', 'in', ['booked', 'check_in']], ['check_in_date', '>=', this.state.db_today_data.today_start], ['check_in_date', '<=', this.state.db_today_data.today_end]]
////        const data = await this.orm.searchCount("sale.order", domain)
////        this.state.db_today_data.today_arr_count = data
////    }
////
////    async getTomorrowArrCount(){
////        const tdata = await this.orm.searchCount("sale.order", [['is_booking', '=', true], ['bk_state', 'in', ['booked', 'check_in']], ['check_in_date', '>=', this.state.db_today_data.tm_start], ['check_in_date', '<=', this.state.db_today_data.tm_end]])
////        this.state.db_today_data.tm_arr_count = tdata
////    }
////
////
////    async getTodayDepCount(){
////        const depCnt = await this.orm.searchCount("hotel.register", [['reg_state', 'in', ['checked-in']], ['dep_date', '>=', this.state.db_today_data.today_start], ['dep_date', '<=', this.state.db_today_data.today_end]])
////        this.state.db_today_data.today_dep_count = depCnt
////    }
////
////    async getTomorrowDepCount(){
////        const depCnt2 = await this.orm.searchCount("hotel.register", [['reg_state', 'in', ['checked-in']], ['dep_date', '>=', this.state.db_today_data.tm_start], ['dep_date', '<=', this.state.db_today_data.tm_end]])
////        this.state.db_today_data.tm_dep_count = depCnt2
////    }
////
//////    activity count
////    async getTodayActivityCount(){
////        const result1 = await this.orm.searchCount("hotel.ex.activities", [['ac_date', '=', this.state.db_today_data.today_date]])
////        this.state.db_today_data.today_activity_count = result1
////
////        const result2 = await this.orm.searchCount("hotel.ex.activities", [['ac_date', '=', this.state.db_today_data.tomorrow_date]])
////        this.state.db_today_data.tm_activity_count = result2
////    }
////    async getTodayExcursions(){
////        const ex1 = await this.orm.searchRead("hotel.ex.activities", [['ac_date', '=', this.state.db_today_data.today_date], ['ac_type', '=', 'excursion']])
////        this.state.db_today_data.today_excursions = ex1
////    }
////
////    async getTodayDinners(){
////        const ex2 = await this.orm.searchRead("hotel.ex.activities", [['ac_date', '=', this.state.db_today_data.today_date], ['ac_type', '=', 'dinner']])
////        this.state.db_today_data.today_dinners = ex2
////    }
////
////
////    async getComplaints(){
////        const r_complaints = await this.orm.searchRead("hotel.complain", [['c_state', '=', 'draft']])
////        this.state.db_today_data.complaints = r_complaints
////    }
////
////    async getTodayBirthdays(){
////        const guests = await this.orm.searchRead("hotel.register", [['reg_state', 'in', ['checked-in']]], ['date_of_birth'])
////
////        let bdate = ""
////        let bday_count = 0
////        let bday_count2 = 0
////
////        for (let i = 0; i < guests.length; i++) {
////            if(guests[i].date_of_birth) {
////				var dateObj = new Date(guests[i].date_of_birth);
////                bdate = moment(dateObj);
////
////                if(bdate.format("MM") === moment().format("MM")){
////
////                    if(bdate.format("DD") === moment().format("DD")){
////
////                        bday_count += 1
////
////                    }
////
////                }
////            }
////
////        }
////        for (let i = 0; i < guests.length; i++) {
////            if(guests[i].date_of_birth) {
////				var dateObj = new Date(guests[i].date_of_birth);
////                bdate = moment(dateObj);
////
////                if(bdate.format("MM") === this.state.db_today_data.tomorrow_date2.format("MM")){
////
////                    if(bdate.format("DD") === this.state.db_today_data.tomorrow_date2.format("DD")){
////
////                        bday_count2 += 1
////
////                    }
////
////                }
////            }
////
////        }
////
////        this.state.db_today_data.today_bithday_count = bday_count
////        this.state.db_today_data.tm_bithday_count = bday_count2
//
//    }
//
//    async viewTodayArrivals(){
////        this.actionService.doAction("ap_guesthouse_registration.action_bookings_today_arrival")
//        let list_view = await this.orm.searchRead("ir.model.data", [['name', '=', 'view_appeul_booking_tree_today_arrival']], ['res_id'])
//
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Today Arrivals",
//            res_model: "sale.order",
//            domain: [['is_booking', '=', true], ['bk_state', 'in', ['booked', 'check_in']], ['check_in_date', '>=', this.state.db_today_data.today_start], ['check_in_date', '<=', this.state.db_today_data.today_end]],
//            views: [
//                [list_view.length > 0 ? list_view[0].res_id : false, "list"],
//            //[1692, "list"],
//                [false, "form"],
//            ]
//        })
//
//    }
//
//
//
//    viewTodayDepartures(){
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Today Departures",
//            res_model: "hotel.register",
//            domain: [['reg_state', 'in', ['checked-in']], ['dep_date', '>=', this.state.db_today_data.today_start], ['dep_date', '<=', this.state.db_today_data.today_end]],
//            views: [
//                [false, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//    viewTodayBirthdays(){
//
//    }
//
//
//    viewTodayActivities(){
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Today Activities",
//            res_model: "hotel.ex.activities",
//            domain: [['ac_date', '=', this.state.db_today_data.today_date]],
//            views: [
//                [false, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//
//    async viewTomorrowArrivals(){
//       let list_view = await this.orm.searchRead("ir.model.data", [['name', '=', 'view_appeul_booking_tree_today_arrival']], ['res_id'])
//
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Tomorrow Arrivals",
//            res_model: "sale.order",
//            domain: [['is_booking', '=', true], ['bk_state', 'in', ['booked', 'check_in']], ['check_in_date', '>=', this.state.db_today_data.tm_start], ['check_in_date', '<=', this.state.db_today_data.tm_end]],
//            views: [
//                [list_view.length > 0 ? list_view[0].res_id : false, "list"],
//            //[1692, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//
//    viewTomorrowDepartures(){
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Tomorrow Departures",
//            res_model: "hotel.register",
//            domain: [['reg_state', 'in', ['checked-in']], ['dep_date', '>=', this.state.db_today_data.tm_start], ['dep_date', '<=', this.state.db_today_data.tm_end]],
//            views: [
//                [false, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//    viewRoomDetails(active_id){
////        console.log('active id', active_id)
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Register by Room",
//            res_model: "hotel.register",
//            domain: [['reg_state', 'in', ['checked-in']], ['room_id', '=', active_id]],
//            views: [
//                [false, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//
//    viewTomorrowBirthdays(){
//
//    }
//
//    viewTomorrowActivities(){
//        this.actionService.doAction({
//            type: "ir.actions.act_window",
//            name: "Tomorrow Activities",
//            res_model: "hotel.ex.activities",
//            domain: [['ac_date', '=', this.state.db_today_data.tomorrow_date]],
//            views: [
//                [false, "list"],
//                [false, "form"],
//            ]
//        })
//    }
//
//    async updateRoomSatus(){
//       const in_guests = await this.orm.searchRead("hotel.register", [['reg_state', 'in', ['checked-in']]], ['room_id', 'due_amount'])
////       console.log(in_guests)
//       const list_rooms = await this.orm.searchRead("hotel.rooms", [] )
//       let amnt_due = 0
//
//
//
//
//       for (let i = 0; i < list_rooms.length; i++) {
//            if(list_rooms[i].id) {
//                 let result = in_guests.filter((p) => {
//                    if(p.room_id) {
//
//                        return p.room_id[0] ===  list_rooms[i].id
//
//                    }
//
//                })
////                console.log(result)
//
//
//                if(result.length > 0)
//                    await this.orm.write("hotel.rooms", [list_rooms[i].id], {
//                        room_state: 'occupied',
//                    });
//                else{
//                    await this.orm.write("hotel.rooms", [list_rooms[i].id], {
//                        room_state: 'vacant',
//                    });
//
//                }
//
//            }
//
//        }
//    }
//
//    async getRooms(){
//       const list_rooms = await this.orm.searchRead("hotel.rooms", [] )
//       this.state.db_today_data.rooms = list_rooms
//    }

}

OwlRqDashboard.template = "ap_recruitment18.OwlRQDashboard"
//OwlFoDashboard.components = { KpiCard, RoomCard }


registry.category("actions").add("ap_recruitment18.recruit_dashboard", OwlRqDashboard)