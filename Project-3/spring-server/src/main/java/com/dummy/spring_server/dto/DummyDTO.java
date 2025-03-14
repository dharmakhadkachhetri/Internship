package com.dummy.spring_server.dto;

import com.dummy.spring_server.model.Dummy.Status;

public class DummyDTO {

    private String name;
    private String description;
    private Status status;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
}