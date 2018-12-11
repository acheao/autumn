package aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import java.util.Date;

@Aspect
@Component
public class Audience {

    @Pointcut("execution(** main.soundsystem.SgtPeppers.play(..))")
    public void play(){

    }

    @Before("play()")
    public void beforePlay(){
        System.out.println("Say Hello !");
    }

    @AfterReturning("play()")
    public void after(){
        System.out.println("after call play");
    }

    @Around("play()")
    public void around(ProceedingJoinPoint jp){
        System.out.println("round the fucntion");
        long startTime = System.currentTimeMillis();
        System.out.println(startTime);
        try {
            jp.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        System.out.println(new Date());
        long endTime = System.currentTimeMillis();
        System.out.println(endTime);
        System.out.println(endTime-startTime);
    }
}
