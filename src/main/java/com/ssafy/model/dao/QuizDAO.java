package com.ssafy.model.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.model.dto.Quiz;

@Mapper
public interface QuizDAO {
	public Quiz search(int no) throws SQLException;
	public List<Quiz> searchRealAll( ) throws SQLException;
	public List<Quiz> searchAll(int level) throws SQLException;
	public List<Quiz> searchOneWithLevel(int level) throws SQLException;
}
