package com.qa.W8PR.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qa.W8PR.domain.Comic;

@Repository // everything we need is in JpaRepository for now.
public interface ComicRepo extends JpaRepository<Comic, Long> {
	//must use objects within, so wrapper of long is Long

	Optional<Comic> findComicByComicName(String comicName);
	
	//finds only comics that are diet friendly. Done as manual query for proof of learning
	@Query(value = "SELECT * FROM comic WHERE artists = ?1", nativeQuery = true)
	List<Comic> findComicByArtists(boolean artists);
}
