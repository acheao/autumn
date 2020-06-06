package spitter.web.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@PropertySource("classpath:redis.properties")
public class RedisConfig {
    @Autowired
    private Environment env;
    @Bean
    public RedisConnectionFactory redisCF() {
        JedisConnectionFactory cf = new JedisConnectionFactory();
        cf.setHostName(env.getProperty("redis.host"));
        cf.setPort(Integer.valueOf(env.getProperty("redis.port")));
        cf.setPassword(env.getProperty("redis.pass"));
        cf.afterPropertiesSet();
        return cf;
    }
    @Bean
    public RedisTemplate<String, String> redisTemplate(RedisConnectionFactory cf) {
        RedisTemplate<String, String> redis = new RedisTemplate<>();
        redis.setConnectionFactory(cf);
        //设置 key value 序列号类型
//        redis.setKeySerializer(stringRedisSerializer());
//        redis.setValueSerializer(stringRedisSerializer());
//        redis.setHashKeySerializer(stringRedisSerializer());
//        redis.setHashValueSerializer(stringRedisSerializer());
        redis.afterPropertiesSet();
        return redis;
    }
    @Bean
    public StringRedisSerializer stringRedisSerializer() {
        return new StringRedisSerializer();
    }

    @Bean
    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory cf) {
        return new StringRedisTemplate(cf);
    }

}
