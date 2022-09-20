                                                                                              package com.qa.W8PR.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.qa.W8PR.domain.Comic;
import com.qa.W8PR.exceptions.ComicNotFoundException;
import com.qa.W8PR.exceptions.ComicNotFoundExceptionWithName;
import com.qa.W8PR.repositories.ComicRepo;

@Service
public class ComicService {
	
	private ComicRepo repo;
	
	public ComicService(ComicRepo repo)	{
		this.repo = repo;
	}

	public Comic create(Comic newComic) {
		return repo.saveAndFlush(newComic);
	}

	public List<Comic> getAll() {
		return repo.findAll();
	}
	
	//custom query
	public Comic getComicByName(String comicName)	{
		return repo.findComicByComicName(comicName).orElseThrow(() -> new ComicNotFoundExceptionWithName(comicName));
	}
	
	//custom query
	public List<Comic> getArtists(boolean artists)	{
		return repo.findComicByArtists(artists);
	}
	
	// We could try a throw nullPointerException, but we'll use optionals instead
	//using new orElseThrow without specification, as proof of learning of two different exception
	//types
	public Comic getById(long id) {
		return repo.findById(id).orElseThrow(ComicNotFoundException::new);
		// here we can catch and force the user to pick the right thing
	}

	// Update -> Put Request
	public Comic update(long id, Comic comic) {
		Comic current = repo.findById(id).get();
		current.setComicName(comic.getComicName());
		current.setAuthors(comic.getAuthors());
		current.setArtists(comic.getArtists());
		return repo.saveAndFlush(current);
	}
	
	// Delete -> Delete Request
	//changed to boolean to return true or false. !repo. normally returns false if does not exist
	//but much nicer human-logically to invert it, so returns true if the id has been deleted
	public boolean delete(long id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}
}
//for reference with params
	// Update -> Put Request with params
//	public Comic updateWithParam(long id, Comic comic) {

//	}


