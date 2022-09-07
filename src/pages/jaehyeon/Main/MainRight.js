import Footer from './Footer';
import profile from '../../../assets/jaehyeon/profile.jpg';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main-right">
      <div className="main-right-top">
        <div className="top-profile">
          <img src={profile} alt="" />
        </div>
        <div className="top-profile-text">
          <span className="idText">JaeHyeon_wecode</span>

          <span>Wecode | 위코드</span>
        </div>
      </div>
      <div className="main-right-mid">
        <div className="main-right-title">
          <div>스토리</div>
          <div>모두 보기</div>
        </div>
        <div className="recom-list">
          <div className="recom-box">
            <div className="img-box">
              <img src="/images/jaehyeon/profile.jpg" alt="" />
            </div>
            <div>
              <span className="idText">JaeHyeon_wecode</span>
              <br />
              <span>Wecode | 위코드</span>
            </div>
          </div>
        </div>
        <div className="recom-list">
          <div className="recom-box">
            <div className="img-box">
              <div>
                <img src="/images/jaehyeon/profile.jpg" alt="" />
              </div>
            </div>
            <div>
              <span className="idText">JaeHyeon_wecode</span>
              <br />
              <span>Wecode | 위코드</span>
            </div>
          </div>
        </div>
        <div className="recom-list">
          <div className="recom-box">
            <div className="img-box">
              <div>
                <img src="/images/jaehyeon/profile.jpg" alt="" />
              </div>
            </div>
            <div>
              <span id="name" className="idText">
                JaeHyeon_wecode
              </span>
              <br />
              <span>Wecode | 위코드</span>
            </div>
          </div>
        </div>
        <div className="recom-list">
          <div className="recom-box">
            <div className="img-box">
              <div>
                <img src="/images/jaehyeon/profile.jpg" alt="" />
              </div>
            </div>
            <div>
              <span className="idText">JaeHyeon_wecode</span>
              <br />
              <span>Wecode | 위코드</span>
            </div>
          </div>
        </div>
        <div className="recom-list">
          <div className="recom-box">
            <div className="img-box">
              <div>
                <img src="./images/profile.jpg" alt="" />
              </div>
            </div>
            <div>
              <span className="idText">JaeHyeon_wecode</span>
              <br />
              <span>Wecode | 위코드</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-right-bot">
        <div className="bot-title">
          <div>회원님을 위한 추천</div>
          <div id="show-more">모두 보기</div>
        </div>
        <div className="mr-bot-box">
          <div className="recom-img-box">
            <img
              className="recom-img"
              src="https://images.unsplash.com/photo-1660474220980-4727894eec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
              alt=""
            />
          </div>
          <div className="recom-txt-box">
            <span className="idText">Crong</span>
            <br />
            <span>who loves panguin</span>
          </div>
        </div>
        <div className="mr-bot-box">
          <div className="recom-img-box">
            <img
              className="recom-img"
              src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZ3VpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="recom-txt-box">
            <span className="idText">Pororo</span>
            <br />
            <span>who loves rizard</span>
          </div>
        </div>
        <div className="mr-bot-box">
          <div className="recom-img-box">
            <img
              className="recom-img"
              src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYXIlMjBiZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="recom-txt-box">
            <span className="idText">Phobi</span>
            <br />
            <span>북극의 왕 glorious king Phobi</span>
          </div>
        </div>
        <div className="mr-bot-box">
          <div className="recom-img-box">
            <img
              className="recom-img"
              src="https://images.unsplash.com/photo-1659968652648-9ec33df989d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="recom-txt-box">
            <span className="idText">Boradori</span>
            <br />
            <span>the forgotten king..</span>
          </div>
        </div>
        <div className="mr-bot-box">
          <div className="recom-img-box">
            <img
              className="recom-img"
              src="https://velog.velcdn.com/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png"
              alt=""
            />
          </div>
          <div className="recom-txt-box">
            <span className="idText">Wecode</span>
            <br />
            <span>Welcome to heaven of coders</span>
          </div>
        </div>
      </div>
      <div>
        <div className="info">
          <Footer />
        </div>
        <div className="info">C 2019 INSTAGRAM</div>
      </div>
    </div>
  );
}

export default MainRight;
