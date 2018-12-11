package main.soundsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class CDPlayerTest {
    static ApplicationContext context = null;

    @Autowired
    private SgtPeppers sc;

    public SgtPeppers getSc() {
        return sc;
    }


    public void setSc(SgtPeppers sc) {
        this.sc = sc;
    }

    public static void main(String[] args){
        context = new FileSystemXmlApplicationContext("resource/config/application-context.xml") ;
        ((SgtPeppers)context.getBean("sgtPeppers")).play();


    }
}
