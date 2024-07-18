import ToastStatusEnum from './ToastStatusEnum.ts';

const buttonColorMap = {
  [ToastStatusEnum.Error]: 'red',
  [ToastStatusEnum.Warning]: 'orange',
  [ToastStatusEnum.Success]: 'green',
};

export default buttonColorMap;
