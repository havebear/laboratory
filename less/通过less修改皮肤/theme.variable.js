/*
 * @Author: BGG@qq.com
 * @Date: 2020-09-11 16:19:55
 * @LastEditors: BGG@qq.com
 * @LastEditTime: 2020-09-16 15:19:50
 * @Description:  平台变量
 */

//  主题变量
var frameworkThemeVariable = [
  // 浅色
  {
    // 不变
    '@white_color': '#ffffff',
    '@danger_color': '#ff4d4f',
    // 框架导航栏
    '@nav_bg': '#FFFFFF',
    '@nav_color': '#7F87AE',
    // 框架主页
    '@home_slide_bg': '#0090FF',
    '@home_slide_color': '#FFFFFF',
    '@home_slide_hover_bg': '#33A6FF',
    '@home_slide_active_bg': '#FFFFFF',
    '@home_slide_active_color': '#0090FF',
    '@home_slide_active_container_bg': '#0673F8',
    'home_tab_color': '#7B8084',
    // 框架工作台
    '@navigation_list_hover_bg': '#0090FF',
    // 通用
    '@disabled_color': '#d9d9d9',
    '@header_bg': '#FFFFFF',
    '@page_bg': '#F6F7FB',
    '@panel_bg': '#FFFFFF',
    '@panel_box-shadow': 'rgba(112, 125, 131, 0.20)', // 面板阴影颜色 rgba(112, 125, 131, 0.15);
    '@side_nav_bg': '#0090FF',
    '@side_nav_selected_bg': '#0072F7',
    '@side_nav_hover_bg': 'rgba(0, 144, 255, 0.5)',
    '@font_color_1': '#222328',
    '@font_color_2': '#51575B',
    '@font_color_subscript': '#7B8084',
    '@font_color_info': '#0090ff',
    '@disabled_color': '#d9d9d9', // 禁止输入字体颜色
    '@border_color': '#e8e8e8',
    '@navigation_list_hover_bg': '#263051',
    // Table
    '@table_header_bg': '#EFF0F5',
    '@table_header_color': '#222328',
    '@table_row_hover_bg': '#e6f7ff',
    '@table_selected_row_bg': '#e6f7ff',
    '@table_row_odd_bg': '#FFFFFF',
    '@table_row_even_bg': '#F4F4F8',
    '@table_body_color': '#51575B',
    // Form
    '@label_color': '#51575B',
    // Input
    '@input_placeholder_color': '#A2A6A8',
    '@input_color': '#51575B',
    '@input_border_color': '#d9d9d9',
    '@input_bg': '#fff',
    // select
    '@select_bg': '#FFFFFF',
    '@select_item_selected_bg': '#e6f7ff',
    // modal
    '@modal_bg': '#FFFFFF',
    // button
    '@btn_color': '#7B8084',
    '@btn_boder_color': '#d9d9d9',
    '@btn_table_operate_bg': '#0090ff',
    '@btn_table_operate_color': '#ffffff',
    '@btn_primary_gradient_end': '#00B1FF',
    '@btn_primary_boxshadow_color': 'rgba(0, 144, 255, 0.5)',
    '@btn_primary_disabled_bg': '#d9d9d9',
    '@btn_primary_disabled_color': '#AFB6C1',
    '@btn_rest_disabled_border': '#d9d9d9',
    '@btn_rest_disabled_color': '#AFB6C1',
    // popover
    '@popover_boxshadow_color': 'rgba(112, 125, 131, 0.15)',
    // datePicker
    '@datePicker-header-color': '#7B8084',
    '@datePicker_boxshadow_color': 'rgba(112, 125, 131, 0.15)',
    // switch
    '@switch_bg': 'rgba(0, 0, 0, 0.25)',
    // 滚动条 (chrome下有效)
    '@scrollbar_bg': '#F7F7F7',
    '@scrollbar_thumb_bg': '#E6E6E6',
    '@scrollbar_thumb_hover': '#D8D8D8',
    // 上传组件
    '@upload_picture': '#EFF0F5',
    // 骨架屏
    '@skeleton_bg': '#e6e6e6', // 骨架背景 #e6e6e6
    '@skeleton_bg_end': '#f2f2f2', // 骨架背景渐变最终颜色 #f2f2f2
    // 项目前排序标号颜色
    '@items_bg': '#CCCFD9', // 项目前排序标号颜色背景 #0090ff
    '@loading_mark_bg': '#eeeff1',
    '@statistics_panel_bg': '#F6F7FB', // 统计面板背景 #F6F7FB
    '@statistics_WaterChart_bg': '#F6F7FB', // 水面统计图背景 #F6F7FB
    '@statistics_WaterChart_colorStart': '#50B3FF', // 水面统计图背景 #50B3FF
    '@statistics_WaterChart_colorEnd': '#0072F7', // 水面统计图背景 #0072F7
    // 日历日期禁用颜色
    '@calendar-disabled-cell': '#AFB1B3', // ‘#435d82’,
	    // 水情详情数据卡片  UI要求
    '@water-regime-title': '#0090FF', // '#FFFFFF'
    '@water-regime-text': '#51575B' // '#FFFFFF'
  },
  // 深色
  {
    // 不变
    '@white_color': '#ffffff',
    '@danger_color': '#ff4d4f',
    // 通用
    '@disabled_color': '#51575B', // 禁用颜色 #d9d9d9
    '@nav_color': '#C9D8EF',
    // 框架主页
    '@home_slide_bg': '#0D152B',
    '@home_slide_color': '#B3C5E1',
    '@home_slide_hover_bg': '#1E2847',
    '@home_slide_active_bg': '#0090FF',
    '@home_slide_active_color': '#ffffff',
    '@home_slide_active_container_bg': '#060B17',
    'home_tab_color': '#B3C5E1',
    // 框架工作台
    '@navigation_list_hover_bg': '#263051',
    '@header_bg': '#060b17', // 顶部导航栏背景      #FFFFFF
    '@page_bg': '#0a1226', // 页面背景           #F6F7FB
    '@panel_bg': '#16203e', // 面板背景           #FFFFFF
    '@panel_box-shadow': 'rgba(0, 0, 0, 0.15)', // 面板阴影颜色 rgba(112, 125, 131, 0.15);
    '@side_nav_bg': '#0d152b', // 侧边菜单背景        #0090FF
    '@side_nav_selected_bg': '#0090ff', // 侧边菜单选中背景    #0072F7
    '@side_nav_hover_bg': 'rgba(0, 144, 255, 0.3)', // 侧边菜单移入背景    rgba(0, 144, 255, 0.5)
    '@font_color_1': '#ffffff', // 1级字体颜色        #222328
    '@font_color_2': '#c9d8ef', // 2级字体颜色        #51575B
    '@font_color_subscript': '#849dc1', // 角标字体颜色       #7B8084
    '@font_color_info': '#0090ff', // 信息字体颜色       #0090FF
    '@disabled_color': '#51575B', // 禁止输入字体颜色
    '@border_color': '#1E2E4C', // 边框颜色
    '@navigation_list_hover_bg': '#263051', // 工作台列表鼠标移入
    // Table
    '@table_header_bg': '#263051', // 表格头部背景  #EFF0F5
    '@table_header_color': '#ffffff', // 表格头部字体颜色 #222328
    '@table_row_hover_bg': '#263051', // 表格hover背景颜色  #e6f7ff
    '@table_selected_row_bg': '#263051', // 表格选中背景颜色  #e6f7ff
    '@table_row_odd_bg': '#16203E', // 表格奇数行背景      #FFFFFF
    '@table_row_even_bg': '#1E2847', // 表格偶数行背景     #F4F4F8
    '@table_body_color': '#c9d8ef', // 表格内容字体颜色   #51575B
    // Form
    '@label_color': '#c9d8ef',
    // Input
    '@input_placeholder_color': '#707C97', // #A2A6A8
    '@input_color': '#c9d8ef', // rgba(0,0,0,.65)
    '@input_border_color': '#314B6F', // #d9d9d9
    '@input_bg': '#19203C', // #fff
    // select
    '@select_bg': '#0D152C', // 下拉组件背景  #FFFFFF
    '@select_item_selected_bg': '#1E2847', // 选中项背景  #e6f7ff
    // modal
    '@modal_bg': '#263051', // 弹框背景  #FFFFFF
    // button
    '@btn_color': '#849DC1', // 字体颜色 #rgba(0, 0, 0, 0.65)
    '@btn_boder_color': '#849DC1', // 边框颜色 #d9d9d9
    '@btn_table_operate_bg': '#16203e', // 操作按钮背景           #0090ff
    '@btn_table_operate_color': '#c9d8ef', // 操作按钮颜色        #ffffff
    '@btn_primary_gradient_end': '#00B1FF', // primary按钮渐变最终颜色  #00B1FF
    '@btn_primary_boxshadow_color': 'rgba(0, 144, 255, 0.5)', // primary按钮阴影颜色 :rgba(0, 144, 255, 0.5)
    '@btn_primary_disabled_bg': '#51575B', // primary按钮禁用背景  #d9d9d9
    '@btn_primary_disabled_color': '#AFB6C1', // primary按钮禁用颜色  #d9d9d9
    '@btn_rest_disabled_border': '#51575B', // 重置按钮禁用背景  #d9d9d9
    '@btn_rest_disabled_color': '#51575B', // 重置按钮禁用颜色  #AFB6C1
    // popover
    '@popover_boxshadow_color': 'rgba(0, 0, 0, 0.3)', // popover投影颜色   rgba(112, 125, 131, 0.15)
    // datePicker
    '@datePicker-header-color': '#849DC1', // 头部颜色 rgba(0, 0, 0, 0.65)
    '@datePicker_boxshadow_color': 'rgba(0, 0, 0, 0.3)', // datePicker投影颜色   rgba(112, 125, 131, 0.15)
    // switch
    '@switch_bg': '#849DC1', // 开关默认背景 //rgba(0, 0, 0, 0.25)
    // 滚动条 (chrome下有效)
    '@scrollbar_bg': '#2E3752', // 滚动条整体背景  #F7F7F7
    '@scrollbar_thumb_bg': '#5C6378', // 滑块背景 #E6E6E6
    '@scrollbar_thumb_hover': '#5C6378', // 滑块hover  #D8D8D8
    // 上传组件
    '@upload_picture': '#19203C', // 图片上传背景 #EFF0F5
    // 骨架屏
    '@skeleton_bg': '#1E2847', // 骨架背景 #e6e6e6
    '@skeleton_bg_end': '#0D152C', // 骨架背景渐变最终颜色 #f2f2f2,
    // 项目前排序标号颜色
    '@items_bg': '#0090ff', // 项目前排序标号颜色背景 #CCCFD9
    // 加载中
    '@loading_mark_bg': '#16203e', // 加载中背景 #eeeff1
    '@statistics_panel_bg': 'rgba(255, 255, 255, 0.1)', // 统计面板背景 #F6F7FB
    '@statistics_WaterChart_bg': '#263051', // 水面统计图背景 #F6F7FB
    '@statistics_WaterChart_colorStart': '#088FF7', // 水面统计图背景 #50B3FF
    '@statistics_WaterChart_colorEnd': '#01306D', // 水面统计图背景 #0072F7
    // 日历日期禁用颜色
    '@calendar-disabled-cell': '#435d82', // '#7B8084'
	   // 水情详情数据卡片  UI要求
    '@water-regime-title': '#FFF', // '#0090FF'
    '@water-regime-text': '#FFF' // '#51575B'
  }
]

// 固定变量
var frameworkThemeCommon = {
  // 通用边距
  '@padding': '15px',
  // 字体大小
  '@font_size_xs': '12px',
  '@font_size_sm': '14px',
  '@font_size_md': '16px',
  '@font_size_lg': '18px',
  '@font_size_llg': '20px',
  // 弧度
  '@radius': '5px',
  // 水质等级
  '@wq_level_color_1': '#57CAF9',
  '@wq_level_color_2': '#00C782',
  '@wq_level_color_3': '#74FAA5',
  '@wq_level_color_4': '#FFFD53',
  '@wq_level_color_5': '#F29F39',
  '@wq_level_color_6': '#EC3223'
}
