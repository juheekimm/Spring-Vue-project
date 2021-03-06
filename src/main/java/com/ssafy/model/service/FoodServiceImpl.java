package com.ssafy.model.service;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.model.dao.FoodDAO;
import com.ssafy.model.dto.Food;
import com.ssafy.model.dto.FoodPageBean;
import com.ssafy.model.dto.Ingestion;
import com.ssafy.model.dto.SafeFoodException;

@Service
public class FoodServiceImpl implements FoodService{
	@Autowired
	private FoodDAO dao;
	private String[] allergys={"대두","땅콩","우유","게","새우","참치","연어","쑥","소고기","닭고기","돼지고기","복숭아","민들레","계란흰자"};
	static int now = 0;
	static List<List<Food>> calfoodList;
	
	public Food search(int code) {
		Food find = dao.search(code);
		String str = "";
		if (find == null) {
			throw new SafeFoodException("음식이 없습니다.");
		} else {
			for (int i = 0; i < allergys.length; i++) {
				if (find.getMaterial().contains(allergys[i])) {
					str = str.concat(allergys[i]+" ");
				}
			}
		}
		find.setAllergy(str);
		return find;
	}
	public List<Food> searchAll() {
		return dao.searchAll();
	}
	public List<Food> searchAllBean(FoodPageBean bean) {
		return dao.searchAllBean(bean);
	}
	public List<Integer> searchCharacter(String input){
		return dao.searchCharacter(input);
	}
	@Override
	public void addCount(int code) {
		dao.addCount(code);
	}
	@Override
	public int foodCount(FoodPageBean bean) {
		return dao.foodCount(bean);
	}
	
	
	@Override
	public List<List<Food>> caloryCalc(String keyword, String cal) {
		now = 0;
		try {
			List<Food> food = dao.searchAll();
			Collections.sort(food, new Comparator<Food>() {
	            @Override
	            public int compare(Food f1, Food f2) {
	                return (int) (-1 * (f1.getCalory() - f2.getCalory()));
	            }
	        });
			if (food == null) {
				throw new SQLException();
			} else {
				calfoodList = new LinkedList<>();
				for (int i = 3; i <= 7; i++) {
					int[] com = new int[i];
					combi2(i,0,0,0,com,Integer.parseInt(cal), food);
				}
//				List<Food> calfood = new LinkedList<>();
//				int calory = Integer.parseInt(cal);
//				int size = food.size();
//				for (int i = 1; i < size; i++) {
//					int[] com = new int[i];
//					if (combi(i, 0, 0, com, 0, calory, food)) {
//						for (int j = 0; j < now; j++)
//							calfood.add(food.get(com[j]));
//						/* return calfood; */
//						calfoodList.add(calfood);
//						System.out.println(calfood.toString());
//						now = 0;
//						calfood = new LinkedList<>();
//					}
//				}
				return calfoodList;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	private void combi2(int n, int k,int index, double sum, int[] com,int parseInt, List<Food> food) {
		if(k == 20 || sum > parseInt + 3 || calfoodList.size() >= 3) return;
		
		if (n == index) {
			if (sum >= parseInt - 10 && sum <= parseInt + 10) {
				List<Food> calfood = new LinkedList<>();
				for (int j = 0; j < n; j++)
					calfood.add(food.get(com[j]));
				calfoodList.add(calfood);
			}
			return;
		}
		combi2(n,k+1,index,sum,com,parseInt,food);
		com[index] = k; 
		combi2(n,k+1,index+1,sum + food.get(k).getCalory(), com, parseInt,food);
	}
	
//	private void combi(int n, int k, int idx, int[] com, double sum, int calory, List<Food> food) {
//		if (n == k) {
//			System.out.println(sum);
//			if (sum >= calory - 100 && sum <= calory + 100) {
//				now = k;
//				List<Food> calfood = new LinkedList<>();
//				for (int j = 0; j < now; j++)
//					calfood.add(food.get(com[j]));
//				calfoodList.add(calfood);
//				System.out.println(calfood.toString());
//				now = 0;
//			}
//			return;
//		}
//		
//		for (int i = idx; i < n; i++) {
//			com[k] = i;
//			combi(n, k + 1, i + 1, com, sum + food.get(i).getCalory(), calory, food);
//			com[k] = 0;
//		}
//	}
	
	public List<Food> freIngesFoodList(){
		try {
			return dao.freIngesFoodList();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void insertSelectFood(Ingestion ingestion) {
		try {
			System.out.println(ingestion);
			dao.insertSelectFood(ingestion);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("찜 목록 추가 중 오류");
		}
	}
	
	public void updateSelectFood(Ingestion ingestion) {
		try {
			System.out.println(ingestion);
			dao.updateSelectFood(ingestion);
		}catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("찜 목록 수정 중 오류");
		}
	}
	
	public List<Ingestion> selectSelectFood(String id){
		try {
			return dao.selectSelectFood(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("찜 목록 조회 중 오류");
		}
	}
	
	public void deleteSelectFood(String ino) {
		try {
			dao.deleteSelectFood(ino);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("찜 목록 삭제 중 오류");
		}
	}
	
	//찜한 음식 -> 섭취 음식
	public Ingestion selectOneSelectFood(String ino) {			
		try {
			return dao.selectOneSelectFood(ino);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("찜 섭취 중 오류");
		}
	}
	
	public List<Food> searchNutrientS(String id) {
		try {
			return dao.searchNutrientS(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("그래프 데이터 조회 중 오류");
		}
	}
}