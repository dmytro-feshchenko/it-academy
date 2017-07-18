package com.technoboom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/5/17
 * Time: 3:31 PM
 * Project: ITAcademy
 * Package: com.technoboom.controller
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/courses/**"})
    public String index() {
        return "index";
    }
}
