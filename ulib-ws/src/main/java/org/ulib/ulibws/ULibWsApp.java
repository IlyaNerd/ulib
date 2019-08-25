package org.ulib.ulibws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ULibWsApp {

    public static void main(String[] args) {
        new SpringApplication(ULibWsApp.class).run(args);
    }
}
