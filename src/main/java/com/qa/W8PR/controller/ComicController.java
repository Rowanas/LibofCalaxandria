package com.qa.W8PR.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.qa.W8PR.domain.Comic;
import com.qa.W8PR.services.ComicService;

@RestController
@CrossOrigin
@RequestMapping("/comics")
public class ComicController {

	private ComicService service;

	public ComicController(ComicService service) {
		this.service = service;
	}
// Temporary database for testing syntax
//	private List<Comic> comics = new ArrayList<>();

	@PostMapping("/create")
	public ResponseEntity<Comic> create(@RequestBody Comic comic) {
		return new ResponseEntity<Comic>(service.create(comic), HttpStatus.CREATED);
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Comic>> getAll() {
		return new ResponseEntity<List<Comic>>(service.getAll(), HttpStatus.OK);
	}
	
// I'm keeping these nubbins, but when I'm performing these functions in my webapp,
//	I might just do them in javascript off a basic get request and display just what I want in JS. 
//	@GetMapping("/getComicByName/{comicName}")
//	public ResponseEntity <Comic> getComicByName(@PathVariable String comicName) {
//		return new ResponseEntity<Comic>(service.getComicByName(comicName), HttpStatus.OK);
//	}
//	
//	@GetMapping("getDietFriendly/{dietFriendly}")
//	public ResponseEntity<List<Comic>> getDietFriendly(@PathVariable boolean dietFriendly) {
//		return new ResponseEntity<List<Comic>>(service.getDietFriendly(dietFriendly), HttpStatus.OK);
//	}
//	
	@GetMapping("/getById/{id}")
	public ResponseEntity<Comic> getById(@PathVariable long id) {
		return new ResponseEntity<Comic>(service.getById(id), HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Comic> update(@PathVariable long id, @RequestBody Comic comic) {
		return new ResponseEntity<Comic>(service.update(id, comic), HttpStatus.OK);
	}

	// changed to boolean output to match delete service method.
	// can do a ternary if
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean>delete(@PathVariable long id) {
		return service.delete(id) ? new ResponseEntity<Boolean>(HttpStatus.NO_CONTENT)
				: new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
