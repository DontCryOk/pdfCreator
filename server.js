//Nicht Anfassem
var express = require('express');
var app = express();
var path = require("path");
var PdfPrinter =require('pdfmake');
var fontDescriptors = {
    Roboto: {
        normal: path.join(__dirname,  '/fonts/Roboto-Regular.ttf'),
        bold: path.join(__dirname,  '/fonts/Roboto-Medium.ttf'),
        italics: path.join(__dirname,  '/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname,  '/fonts/Roboto-MediumItalic.ttf')
    }
};
var printer = new PdfPrinter(fontDescriptors);
//Sample Propoerty
var property = {"base_data":{"technical_data":{"title":{"en":"asd","de":"asd","es":"asd"},"master_object":true,"immoNr":"123","responsible":{"name":{"first":"Simon","last":"Ortwein"},"authentification":{"password":"$2b$10$Uc9IqJgV/cqCliq0xBaKZO56gnky.C8uTtSNmHp17pSspd53HKfAO","username":"admin"},"_id":"5d972e80561371529ab56e44","type":"admin","email":"info@appstasy.de","telephone":"+4915774234919","created":"2019-10-04T11:35:28.334Z","__v":0,"internalImagePath":"df8aa115cec5a5addc66969d5802f700.png","imagePath":"user/image/5d972e80561371529ab56e44"},"order_type":{"_id":"5d9cb4b6d5b42ebf717a2b71","de":"ds","en":"asd","es":"dsa","__v":0},"oder_till":null,"sold_at":null,"status":{"_id":"5d9cb4c3d5b42ec1947a2b74","de":"asd","en":"das","es":"asd","__v":0}},"geographical_data":{"street":"Ebersbacher weg","house_number":"6","postcode":"73066","city":"Uhingen","country":{"_id":"5d9b5823d5b42ec3e07a2b62","de":"Deutsch ","en":"German","es":"San","__v":0}},"category":{"holiday_rental":false,"object_kind":{"_id":"5d975c38d5b42e44f97a2b61","de":"Asd","en":"Fds","es":"Lkj","__v":0},"object_type":{"_id":"5d9cb4b1d5b42e73eb7a2b70","de":"asd","en":"dsa","es":"asd","__v":0},"using_type":{"_id":"5d9cb4bed5b42e8f477a2b73","de":"asd","en":"asd","es":"asd","__v":0},"markettype":{"_id":"5d9cb4acd5b42e3cde7a2b6f","de":"asd","en":"dsa","es":"asd","__v":0}},"contact_person":{"name":{"first":"Simon","last":"Ortwein"},"authentification":{"password":"$2b$10$Uc9IqJgV/cqCliq0xBaKZO56gnky.C8uTtSNmHp17pSspd53HKfAO","username":"admin"},"_id":"5d972e80561371529ab56e44","type":"admin","email":"info@appstasy.de","telephone":"+4915774234919","created":"2019-10-04T11:35:28.334Z","__v":0,"internalImagePath":"df8aa115cec5a5addc66969d5802f700.png","imagePath":"user/image/5d972e80561371529ab56e44"}},"price_data":{"currency":"$","asking_price":123},"area_data":{"living_space":12765,"usable_space":768,"property_space":5678,"balcony_space":768,"rooms_count":null,"bedrooom_count":5678,"bathroom_count":6785,"balcony_count":67,"terrace_count":67,"parking_space_count":657,"sepparate_closet_count":56,"apartment":false,"commercial_units_count":5},"detail_data":{"domestic_equipment":{"energy_supplier_type":[{"_id":"5d9b7829d5b42e77dd7a2b6a","de":"asd","en":"ads","es":"aSD","__v":0}],"heating_type":[{"_id":"5d9cb4a1d5b42e11c17a2b6d","de":"asd","en":"dsa","es":"asd","__v":0}],"floor_type":[{"_id":"5d9cb49dd5b42e5c097a2b6c","de":"asd","en":"asd","es":"dsa","__v":0}],"elevator_type":[{"_id":"5d9b582fd5b42e742a7a2b63","de":"Typ1","en":"Asd","es":"Daas","__v":0}],"cable_sat_tv":true,"balcony":false,"terrace":false,"winter_garden":false,"bicycle_room":false,"store_room":false,"guest_toilet":false,"garden":false,"disability_access":true,"commune":false,"fireplace":false,"airconditioned":false,"sauna":false,"window_type":{"_id":"5d9d02c5d5b42e86747a2b8d","de":"ad","en":"ASD","es":"ASD","__v":0},"level_count":2,"basement":{"_id":"5d9b5841d5b42e13837a2b64","de":"Test","en":"Test","es":"Test","__v":0},"equiptment_quality":{"_id":"5d9cb499d5b42e30dc7a2b6b","de":"asd","en":"ads","es":"asd","__v":0},"kitchen":{"_id":"5d9cb4a7d5b42efab47a2b6e","de":"asd","en":"dsa","es":"asd","__v":0},"parking_slot":[{"_id":"5d9d02e3d5b42e5b487a2b90","type":{"_id":"5d9cb4bbd5b42e20837a2b72","de":"dsafds","en":"dfsfghhjk","es":"hjk","__v":0},"count":2}]},"management":{"available_from":{"de":"213","en":"1231","es":"23"},"pets":false,"rented":true,"commecial_use":false,"monunment":true}},"free_text_data":{"description_portal":{"de":"jh","en":"gkjh","es":"kjlh"},"location_portal":{"de":"klj","en":"h","es":"lkjh"},"description_equiptment":{"de":"lkjh","en":"lkj","es":"hjk"},"others":{"de":"hl","en":"jklh","es":"jklhl"},"description_expose":{"de":"kjh","en":"kj","es":"hklj"},"location_expose":{"de":"hkljh","en":"jlk","es":"hlkj"},"equiptment_expose":{"de":"h","en":"lkjh","es":"klj"},"others_expose":{"de":"hlk","en":"jhklj","es":"h"}},"created":"2019-10-04T13:47:56.065Z","_id":"5d9cb549d5b42e9ffd7a2b79","image_data":[{"title":{"de":"asd","en":"das","es":"asd"},"expose":false,"_id":"5d9cb549d5b42e994c7a2b7a","data":{"created":"2019-10-04T11:35:28.171Z","_id":"5d9730105613718281b56e45","internalPath":"9bc9c3fc2e7438d4b8ac1324061b3dcd.png","name":"logo.png","__v":0,"path":"image/5d9730105613718281b56e45"},"type":"panorama_image"},{"title":{"de":"Kreis","en":"Circle1","es":"Kreiò "},"expose":false,"_id":"5d9cb7d7d5b42eb49e7a2b81","data":{"created":"2019-10-04T13:47:56.073Z","_id":"5d9cb78dd5b42e3daf7a2b7e","internalPath":"df8aa115cec5a5addc66969d5802f700.png","name":"Circle (1).png","__v":0,"path":"image/5d9cb78dd5b42e3daf7a2b7e"},"type":"energy_scale"}],"__v":0}

app.get('/', function (req, res) {
    //Nicht Anfassen Ende



    //Hier drinnen musst du dann die werte von property nutzen.
    var dd      = {
      content: [
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
        'Another paragraph'
      ],
    };



    
//Nicht Anfassen
    res.set('content-type', 'application/pdf');
    var pdfDoc = printer.createPdfKitDocument(dd);
    pdfDoc.pipe(res);
    pdfDoc.end();
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//Nicht Anfassen Ende