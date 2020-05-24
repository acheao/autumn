package spitter.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
//@RequestMapping(value = "/ttt")
public class HomeController {
    @RequestMapping(value = "/test",method = GET)
    public String home(){
        System.out.println("----------------");
        return "home";
    }
}
