package data.service;

import java.util.List;
import java.util.Map;

import data.dto.BoardDto;

public interface BoardServiceInter {
	
	public void insertBoard(BoardDto dto);
	public List<BoardDto> getPagingList (int start, int perpage);
	public void updateReadCount(int num);
	public BoardDto deltailPage(int num);
	public void deleteBoard(int num);
	public int getTotalCount();


}