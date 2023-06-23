package data.service;

import java.util.List;

import org.springframework.stereotype.Service;

import data.dto.MemberDto;

@Service
public interface MemberServiceInter {
	
	public void insertMember(MemberDto dto);
	public List<MemberDto> getAllMembers();
	public int getSearchId(String myid);
	public int getLogin(String myid, String mypass);
	public String getName(String myid);
	public void deleteMember(int num);

}
