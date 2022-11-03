
module.exports = {
    security:(req,res,next)=>{
         res.render("pages/solutions/security", { title: "Express",active_nav: "home" });
     },
     management_system:(req,res,next)=>{
        res.render("pages/solutions/management_system", { title: "Express",active_nav: "home" });
    },
    bms:(req,res,next)=>{
        res.render("pages/solutions/bms", { title: "Express" ,active_nav: "home"});
    },
    surveillance:(req,res,next)=>{
        res.render("pages/solutions/surveillance", { title: "Express", active_nav: "home" });
    },
    communication:(req,res,next)=>{
        res.render("pages/solutions/communication", { title: "Express",active_nav: "home" });
    },
    fire_alarm:(req,res,next)=>{
        res.render("pages/solutions/fire_alarm", { title: "Express",active_nav: "home" });
    },
    defence_security:(req,res,next)=>{
        res.render("pages/solutions/defence_security", { title: "Express",active_nav: "home" });
    },
    renewable:(req,res,next)=>{
        res.render("pages/solutions/renewable", { title: "Express",active_nav: "home" });
    },


 }