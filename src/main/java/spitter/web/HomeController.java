package spitter.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
//@RequestMapping(value = "/ttt")
public class HomeController {

    @Autowired
    StringRedisTemplate redis;

    @Autowired
    RedisConnectionFactory redisConnectionFactory;

    @RequestMapping(value = "/test",method = GET)
    public String home(){
        System.out.println("----------------");
        redis.opsForValue().set("20200606", "acheao");
        redis.opsForValue().append("20200606","20200607");
//        redisConnectionFactory.getConnection().
        Map map =  new HashMap();

        return "home";
    }
}
