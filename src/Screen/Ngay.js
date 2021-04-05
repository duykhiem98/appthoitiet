import React from 'react';
import { Text, TouchableOpacity, View,ImageBackground,Image,StyleSheet,ScrollView, Dimensions } from "react-native";
import styled from 'styled-components/native';
import {
  IC_BIEN1,
  IC_BIENFULL, IC_BIT, IC_BUTTON,
  IC_CLOUD,
  IC_DOAM,
  IC_GIO,
  IC_GPS, IC_LINE2,
  IC_MAY,
  IC_MAYMU,
  IC_MUA, IC_PHOTO, IC_RAIN,
  IC_SUB, IC_SUN, IC_TRON,
  IC_UV, IC_VIDEO1, IC_VIDEO2, IC_VIDEO3, IC_VIDEO4, IC_VIDEO5,
} from "../assets";
import Swiper from 'react-native-swiper'
const width = Dimensions.get('window').width; // lay width / height cua dien thoai
const height = Dimensions.get('window').height;

const App=()=>{
  return(
    <Scontainer>
      <Image source={IC_BIENFULL}
             resizeMode={'cover'}
             style={{position: 'absolute',
               width: width,
               height: height,
               top: 0, left: 0, bottom: 0, right: 0, zIndex: -1}}/>
      <Sscroll>
        <Sbgroud >

          <Sbg1>
            <View style={{width:80,padding:20,}}>
              <TouchableOpacity>
                <Image source={IC_BUTTON} resizemode={'cover'} style={{width:20,height:20}} />
              </TouchableOpacity>

            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
                <Image resizemode={'contain'} source={IC_GPS} style={{width:24,height:24}} />
                <Shn>Hà Nội</Shn>
              </View>

              <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
                <Image resizemode={'contain'} source={IC_CLOUD} style={{width:24,height:24}} />
                <SdoC>16°C</SdoC>
              </View>
            </View>
            <View style={{width:60,padding:20}}>
              <TouchableOpacity>
                <Image source={IC_TRON} resizemode={'cover'} style={{width:20,height:20}} />
              </TouchableOpacity>

            </View>

          </Sbg1>
          <Sbg2>
            <View style={{flexDirection:'row',justifyContent:'center',paddingBottom:20}}>
              <Text style={{color:'white'}}>Nhiều mưa không mây</Text>
            </View>

            <View style={{width:310,height:90,backgroundColor:'#FF0000',alignItems:'center',}}>
              <View style={{flexDirection:'column',paddingTop:10,paddingLeft:5}}>
                <St>TIN KHÔNG KHÍ LẠNH TĂNG CƯỜNG, RÉT VÀ CẢNH BÁO GIÓ MẠNH</St>
                <St>Không khí lạnh tăng cường</St>
                <St>05/01/2020  9:30</St>
              </View>
            </View>
          </Sbg2>

          <Sbg3>
            <View style={{paddingLeft:20,paddingTop:180}}>
              <Text style={{fontWeight:'bold',color:'white'}}>Dự Báo trong ngày</Text>
            </View>

            <View style={{paddingHorizontal:30,paddingTop:40}}>
              <Image source={IC_LINE2} style={{width:345,height:60}}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:30,paddingHorizontal:20}}>
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingHorizontal:20}}>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
            </View>

          </Sbg3>

          <Sbg4>
            <View style={{flex:1,paddingVertical:25}}>
              <Text style={{fontWeight:'bold',color:'white'}}>TP. Hà Nội</Text>
              <Text style={{color:'white'}}>Dự Báo trong 3 giờ tới</Text>
            </View>
            <View style={{flex:2,flexDirection:'row',}}>
              <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={IC_MUA} style={{width:27,height:27}} />
                <Image source={IC_GIO} style={{width:27,height:27}} />
              </View>
              <View style={{flex:2,flexDirection:'column',justifyContent:'space-around'}}>
                <View>
                  <ST3>50°C</ST3>
                  <ST2>Xác xuất có mưa</ST2>
                </View>
                <View>
                  <ST1>1.25 m/s</ST1>
                  <ST2>Tốc đọ gió</ST2>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={IC_DOAM} style={{width:26,height:26}} />
                <Image source={IC_UV} style={{width:26,height:26}} />
              </View>
              <View style={{flex:2,flexDirection:'column',justifyContent:'space-around'}}>
                <View>
                  <ST1>91.3 %</ST1>
                  <ST2>Độ ẩm</ST2>
                </View>
                <View>
                  <ST1>3.5</ST1>
                  <ST2>Chỉ số UV</ST2>
                </View>
              </View>
            </View>
          </Sbg4>

        </Sbgroud>
        <S7ngay>
          <S7view>
            <Stext>Dự báo 7 ngày tới</Stext>
          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ tư</Stextday>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
              <Image source={IC_MAY} style={{width:15,height:10,}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>16°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>19°C</Text>
            </View>
          </S7view>


          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ năm</Stextday>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
              <S7am>50%</S7am>
              <Image source={IC_RAIN} style={{width:15,height:15}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>15°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>16°C</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ sáu</Stextday>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
              <S7am>30%</S7am>
              <Image source={IC_RAIN} style={{width:15,height:15}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>10°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>13°C</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ bảy</Stextday>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
              <S7am>30%</S7am>
              <Image source={IC_RAIN} style={{width:15,height:15}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>12°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>14°C</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Chủ nhật</Stextday>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
              <S7am>30%</S7am>
              <Image source={IC_RAIN} style={{width:15,height:15}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>12°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>14°C</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ hai</Stextday>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
              <Image source={IC_MAY} style={{width:15,height:10,}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>12°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>14°C</Text>
            </View>
          </S7view>

          <S7view>
            <View style={{width:160}}>
              <Stextday>Thứ ba</Stextday>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
              <Image source={IC_SUN} style={{width:15,height:10,}} />
            </View>

            <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',paddingRight:20}}>16°C</Text>
              <Text style={{fontWeight:'bold',color:'white'}}>19°C</Text>
            </View>
          </S7view>




        </S7ngay>
        <View style={{height:10,backgroundColor:'black'}}></View>
        <Svideo>
          <View style={{paddingHorizontal:20,paddingVertical:12}}>
            <Text style={{fontWeight:'bold',color:'white'}}>VIDEO DỰ BÁO THỜI TIẾT </Text>
          </View>
          <View>
            <Image source={IC_VIDEO1} style={{width:width}} resizemode={'stretch'} />
          </View>
          <View style={{paddingHorizontal:20,borderBottomWidth:0.2,borderBottomColor:'white'}}>
            <Text style={{marginVertical:10,color:'white',fontWeight:'bold'}}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau bão | VTV TST</Text>
          </View>
          <View style={{height:300}}>
            <Swiper>
              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau bão | VTV TST</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO2} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm nay</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO3} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau bão | VTV TST</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO2} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm nay</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO3} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau bão | VTV TST</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO2} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white'}}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm nay</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO3} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>



            </Swiper>
          </View>
        </Svideo>

        <View style={{height:10,backgroundColor:'black'}}></View>

        <Svideo>
          <View style={{paddingHorizontal:20,paddingVertical:12,borderBottomWidth:0.2,borderBottomColor:'white'}}>
            <Text style={{fontWeight:'bold',color:'white',}}>BẢN TIN CHUYÊN ĐỀ</Text>
          </View>
          <View style={{height:300}}>
            <Swiper>
              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin cảnh báo gió mạnh và sóng lớn trên biên</Text>
                    <Text style={{color:'white'}}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO4} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin không khí lạnh tăng cường, rét và cảnh báo gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{color:'white'}}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20,}}>
                    <Image source={IC_VIDEO5} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin cảnh báo gió mạnh và sóng lớn trên biên</Text>
                    <Text style={{color:'white'}}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO4} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin không khí lạnh tăng cường, rét và cảnh báo gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{color:'white'}}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20,}}>
                    <Image source={IC_VIDEO5} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin cảnh báo gió mạnh và sóng lớn trên biên</Text>
                    <Text style={{color:'white'}}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO4} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin không khí lạnh tăng cường, rét và cảnh báo gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{color:'white'}}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20,}}>
                    <Image source={IC_VIDEO5} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{height:300,flexDirection:'column'}}>
                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin cảnh báo gió mạnh và sóng lớn trên biên</Text>
                    <Text style={{color:'white'}}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20}}>
                    <Image source={IC_VIDEO4} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.2,borderBottomColor:'white'}}>
                  <View style={{flex:1.9,paddingLeft:20}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Tin không khí lạnh tăng cường, rét và cảnh báo gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{color:'white'}}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{flex:1.1,paddingLeft:20,}}>
                    <Image source={IC_VIDEO5} style={{width:120,height:75}} />
                  </View>
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </Svideo>

        <View style={{height:10,backgroundColor:'black'}}></View>


        <View style={{flexDirection:'row',backgroundColor:'#193654'}}>
          <View style={{width:300,paddingHorizontal:20,paddingVertical:12}}>
            <Text style={{fontWeight:'bold',color:'white'}}>VIDEO DỰ BÁO THỜI TIẾT </Text>
          </View>
          <View style={{flex:1}}></View>
          <TouchableOpacity style={{width:80,alignItems:'center',justifyContent:'center'}}>
            <Image source={IC_PHOTO} />
          </TouchableOpacity>
        </View>

        <View>
          <Image source={IC_BIT} style={{width:width}} />
        </View>

        <View style={{flexDirection:'row',backgroundColor:'#193654'}}>
          <View style={{width:350,paddingHorizontal:20,paddingVertical:12}}>
            <Text style={{color:'white'}}>Nhiệt độ ngoài trời Hà nội thấp nhất là 12°</Text>
          </View>
          <View style={{flex:1}}></View>
          <TouchableOpacity style={{width:80,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/icon/1_10.png')} resizemode={'cover'} />
          </TouchableOpacity>
        </View>

      </Sscroll>
    </Scontainer>

  )
}
const Scontainer=styled(View)`
  flex: 1;
  background-color: #193654;
  flex-direction: column;
`;
const Sscroll=styled(ScrollView)`
`;
const Sbgroud=styled.View`
  flex: 1;
  flex-direction: column;
`;
const Shn=styled(Text)`
  font-size: 17px;
  color: white;
  margin-left: 10px;
`;
const SdoC=styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;
const St=styled(Text)`
  font-size: 13px;
  color: white;
`;
const Sbg1=styled(View)`
  flex: 1.5;
  flex-direction: row;
`;
const Sbg2=styled(View)`
  flex: 2.5;
  padding-right: 50px;
  padding-left: 50px;
`;
const Sbg3=styled(View)`
  flex: 3;
`;
const Sbg4=styled(View)`
  flex: 3;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

`;
const Sm=styled(Text)`
  font-size: 12px;
  color: white;
`;
const ST3=styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #86EFFD;
`;
const ST2=styled(Text)`
  font-size: 16px;
  color: white;
`;
const ST1=styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const S7ngay=styled.View`
  background-color: #193654;
  justify-content: center;
`;
const Stext=styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 10px;
  color: white;
`;
const S7view=styled(View)`
  padding-left:20px;
  padding-right: 20px;
  flex-direction: row;
  border-bottom-width: 0.2px;
  border-bottom-color: white;
`;
const Stextday=styled(Text)`
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`;
const S7am=styled(Text)`
  color:  #86EFFD;
  font-weight: bold;
  padding-right: 10px;
`;
const Svideo=styled(View)`
  flex-direction: column;
  backgroundColor:#193654;
`;


export default App;
