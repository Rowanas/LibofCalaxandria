package com.qa.W8PR.exceptions;

import java.util.NoSuchElementException;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

//easier, quicker, but cannot alter to fit specifics
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "No comic with this ID")
public class ComicNotFoundException extends NoSuchElementException {
}
