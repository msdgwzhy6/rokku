import React, { useReducer } from 'react';
import { Popup, Cell } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

const initialState = {
  showBasic: false,
  showTop: false,
  showBottom: false,
  showLeft: false,
  showRight: false,
  showCloseIcon: false,
  showCustomCloseIcon: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showBasic: !state.showBasic };
    case 'showTop':
      return { ...state, showTop: !state.showTop };
    case 'showBottom':
      return { ...state, showBottom: !state.showBottom };
    case 'showLeft':
      return { ...state, showLeft: !state.showLeft };
    case 'showRight':
      return { ...state, showRight: !state.showRight };
    case 'showCloseIcon':
      return { ...state, showCloseIcon: !state.showCloseIcon };
    case 'showCustomCloseIcon':
      return { ...state, showCustomCloseIcon: !state.showCustomCloseIcon };
    case 'showCustomIconPosition':
      return { ...state, showCustomIconPosition: !state.showCustomIconPosition };
    case 'showRoundCorner':
      return { ...state, showRoundCorner: !state.showRoundCorner };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell
          title="展示弹出层"
          isLink
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="弹出位置">
        <Cell
          title="顶部弹出"
          isLink
          onClick={() =>
            dispatch({
              type: 'showTop',
            })
          }
        />
        <Cell
          title="底部弹出"
          isLink
          onClick={() =>
            dispatch({
              type: 'showBottom',
            })
          }
        />
        <Cell
          title="左侧弹出"
          isLink
          onClick={() =>
            dispatch({
              type: 'showLeft',
            })
          }
        />
        <Cell
          title="右侧弹出"
          isLink
          onClick={() =>
            dispatch({
              type: 'showRight',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="关闭图标">
        <Cell
          title="关闭图标"
          isLink
          onClick={() =>
            dispatch({
              type: 'showCloseIcon',
            })
          }
        />
        <Cell
          title="自定义关闭图标"
          isLink
          onClick={() =>
            dispatch({
              type: 'showCustomCloseIcon',
            })
          }
        />
        <Cell
          title="图标位置"
          isLink
          onClick={() =>
            dispatch({
              type: 'showCustomIconPosition',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="圆角弹窗">
        <Cell
          title="圆角弹窗"
          isLink
          onClick={() =>
            dispatch({
              type: 'showRoundCorner',
            })
          }
        />
      </DemoBlock>
      <Popup
        visible={state.showBasic}
        onClose={() =>
          dispatch({
            type: 'showBasic',
          })
        }
      >
        <div style={{ padding: '30px 50px' }}>内容</div>
      </Popup>
      <Popup
        visible={state.showTop}
        style={{ height: '30%' }}
        position="top"
        onClose={() =>
          dispatch({
            type: 'showTop',
          })
        }
      />
      <Popup
        visible={state.showBottom}
        style={{ height: '30%' }}
        position="bottom"
        onClose={() =>
          dispatch({
            type: 'showBottom',
          })
        }
      />
      <Popup
        visible={state.showLeft}
        style={{ width: '30%', height: '100%' }}
        position="left"
        onClose={() =>
          dispatch({
            type: 'showLeft',
          })
        }
      />
      <Popup
        visible={state.showRight}
        style={{ width: '30%', height: '100%' }}
        position="right"
        onClose={() =>
          dispatch({
            type: 'showRight',
          })
        }
      />
      <Popup
        visible={state.showCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        onClose={() =>
          dispatch({
            type: 'showCloseIcon',
          })
        }
      />
      <Popup
        visible={state.showCustomCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        onClose={() =>
          dispatch({
            type: 'showCustomCloseIcon',
          })
        }
      />
      <Popup
        visible={state.showCustomIconPosition}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        closeIconPosition="top-left"
        onClose={() =>
          dispatch({
            type: 'showCustomIconPosition',
          })
        }
      />
      <Popup
        visible={state.showRoundCorner}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        round
        onClose={() =>
          dispatch({
            type: 'showRoundCorner',
          })
        }
      />
    </DemoSection>
  );
};
