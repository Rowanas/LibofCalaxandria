package com.qa.W8PR.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//creating a table with spring. Doesn't need to be called, SpringApplication goes and hunts all of the springable stuff
//and pops it in your tables.
//Lombok used as proof of Lombok use. I used Lombok. Lombok config file excludes this from testing.
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comic {

	@Id // makes this column the primary key you can put it in another non-numerical key!
	@GeneratedValue(strategy = GenerationType.IDENTITY) //longwinded way of saying "autoincrement"
	private long id;
	
	//may put "unique = true" again as a stretch goal
	//with functionality to kick a user to check an existing comic if they attempt to create
	//another with the same name. Could do entirely front end though.
	@Column(nullable = false)
	private String comicName; // recognises camelCase and split to become SQLable names
	
	@Column(nullable = false)
	private String authors;

	@Column
	private String artists;

	public Comic(String comicName, String authors, String artists) {
		super();
		this.comicName = comicName;
		this.authors = authors;
		this.artists = artists;
	}	
}