package com.devapp.crud_fullstack_angular.exception;

import java.time.LocalDateTime;

public class ErrorDetails {
    private LocalDateTime timeStap;
    private String message;
    private String path;
    private String errorCode;

    public ErrorDetails() {
    }

    public ErrorDetails(LocalDateTime timeStap, String message, String path, String errorCode) {
        this.timeStap = timeStap;
        this.message = message;
        this.path = path;
        this.errorCode = errorCode;
    }

    public LocalDateTime getTimeStap() {
        return timeStap;
    }

    public void setTimeStap(LocalDateTime timeStap) {
        this.timeStap = timeStap;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
}
