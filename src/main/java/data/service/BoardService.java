package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import data.dto.BoardDto;
import data.mapper.BoardMapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoardService implements BoardServiceInter {
	
	private BoardMapper boardMapper;

	@Override
	public void insertBoard(BoardDto dto) {
		boardMapper.insertBoard(dto);
	}

	@Override
	public List<BoardDto> getPagingList(int start, int perpage) {
		// TODO Auto-generated method stub
		Map<String,Integer> map = new HashMap<>();
		map.put("start", start);
		map.put("perpage", perpage);
		return boardMapper.getPagingList(map);
	}

	@Override
	public void updateReadCount(int num) {
		// TODO Auto-generated method stub
		boardMapper.updateReadCount(num);

	}

	@Override
	public BoardDto deltailPage(int num) {
		// TODO Auto-generated method stub
		return boardMapper.deltailPage(num);
	}

	@Override
	public void deleteBoard(int num) {
		// TODO Auto-generated method stub
		boardMapper.deleteBoard(num);
	}

	@Override
	public int getTotalCount() {
		// TODO Auto-generated method stub
		return boardMapper.getTotalCount();
	}

}
