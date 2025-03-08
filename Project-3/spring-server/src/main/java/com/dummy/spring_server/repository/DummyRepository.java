package com.dummy.spring_server.repository;

import com.dummy.spring_server.model.Dummy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DummyRepository extends JpaRepository<Dummy, Long> {
}
