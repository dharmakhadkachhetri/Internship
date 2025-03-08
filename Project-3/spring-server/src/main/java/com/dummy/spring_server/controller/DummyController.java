package com.dummy.spring_server.controller;

import com.dummy.spring_server.dto.DummyDTO;
import com.dummy.spring_server.model.Dummy;
import com.dummy.spring_server.service.DummyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dummies")
public class DummyController {

    @Autowired
    private DummyService dummyService;

    @PostMapping
    public Dummy createDummy(@RequestBody DummyDTO dummyDTO) {
        return dummyService.createDummy(dummyDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dummy> updateDummy(@PathVariable Long id, @RequestBody DummyDTO dummyDTO) {
        Dummy updatedDummy = dummyService.updateDummy(id, dummyDTO);
        return updatedDummy != null ? ResponseEntity.ok(updatedDummy) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDummy(@PathVariable Long id) {
        dummyService.deleteDummy(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public List<Dummy> getAllDummies() {
        return dummyService.getAllDummies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dummy> getDummyById(@PathVariable Long id) {
        Dummy dummy = dummyService.getDummyById(id);
        return dummy != null ? ResponseEntity.ok(dummy) : ResponseEntity.notFound().build();
    }

}