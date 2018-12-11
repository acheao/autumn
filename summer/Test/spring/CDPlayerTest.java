package spring;

import config.Config;
import main.music.ScanObj;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import main.soundsystem.CompactDisc;

import static org.junit.Assert.assertNotNull;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Config.class)
public class CDPlayerTest {
    @Autowired
    private CompactDisc cd;

    @Autowired
    private ScanObj sc;
    @Test
    public void test(){
        assertNotNull(cd);
        cd.play();
    }


}
