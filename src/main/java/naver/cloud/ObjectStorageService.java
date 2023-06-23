package naver.cloud;

import org.springframework.web.multipart.MultipartFile;

public interface ObjectStorageService {
	public String uploadFile(String bucketName, String directoryPath, MultipartFile file);
	public void deleteFile(String bucketName,String directoryPath,String fileName);	 
	//DB에 있는 원본 파일명을 받아서 삭제 (삭제 후에 지우려면 파일명 알수없음)
}
