package com.dummy.spring_server.service;

import com.dummy.spring_server.dto.DummyDTO;
import com.dummy.spring_server.model.Dummy;
import com.dummy.spring_server.repository.DummyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DummyService {

    @Autowired
    private DummyRepository dummyRepository;

    public List<Dummy> getAllDummies() {
        return dummyRepository.findAll();
    }

    public Dummy getDummyById(Long id) {
        return dummyRepository.findById(id).orElse(null);
    }

    public Dummy createDummy(DummyDTO dummyDTO) {
        Dummy dummy = new Dummy();
        dummy.setName(dummyDTO.getName());
        dummy.setDescription(dummyDTO.getDescription());
        dummy.setStatus(dummyDTO.getStatus());
        return dummyRepository.save(dummy);
    }

    public Dummy updateDummy(Long id, DummyDTO dummyDTO) {
        Optional<Dummy> optionalDummy = dummyRepository.findById(id);
        if (optionalDummy.isPresent()) {
            Dummy dummy = optionalDummy.get();
            dummy.setName(dummyDTO.getName());
            dummy.setDescription(dummyDTO.getDescription());
            dummy.setStatus(dummyDTO.getStatus());
            return dummyRepository.save(dummy);
        }
        return null;
    }

    public void deleteDummy(Long id) {
        dummyRepository.deleteById(id);
    }
}

