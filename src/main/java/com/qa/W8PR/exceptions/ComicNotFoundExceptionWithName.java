package com.qa.W8PR.exceptions;

import java.util.NoSuchElementException;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ComicNotFoundExceptionWithName extends NoSuchElementException {
// created as proof of learning, and allows me to pass comicName as an argument	
	public ComicNotFoundExceptionWithName(String comicName)	{
		super(comicName+" does not exist, but it sounds cool");
				
	}
}
