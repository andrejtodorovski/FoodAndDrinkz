package mk.foodanddrinkz.backend.filters;

import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
// Will be implemented
//@WebFilter(filterName = "LoginFilter")
//public class LoginFilter implements Filter {
//    public void init(FilterConfig config) throws ServletException {
//    }
//
//    public void destroy() {
//    }
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws ServletException, IOException {
//        HttpServletRequest request = (HttpServletRequest) servletRequest;
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//
//        String user = (String) request.getSession().getAttribute("user");
//        String path = request.getServletPath();
//
//        if (user == null && !path.equals("/login")) {
//            response.sendRedirect("/login");
//        } else {
//            chain.doFilter(servletRequest, servletResponse);
//        }
//
//    }
//}
