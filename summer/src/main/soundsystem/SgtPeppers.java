package main.soundsystem;

import org.springframework.stereotype.Component;

@Component
public class SgtPeppers implements CompactDisc {

    private String title = "Sgt perper's Lonely hearts club Band";
    private String arttis = "The Beatles";

    @Override
    public void play() {
        System.out.println("play " + title + " by "+ arttis);
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArttis() {
        return arttis;
    }

    public void setArttis(String arttis) {
        this.arttis = arttis;
    }
}
