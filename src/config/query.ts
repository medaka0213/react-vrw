import { TimeRange } from '../models/TimeRange';

type SEARCH_MODE_TYPE = {
  label: string;
  value: string;
  divider?: boolean;
  type: 'number' | 'string' | 'datetime';
  enabled?: boolean;
};

type SEARCH_ITEM_TYPE = {
  [key: string]: SEARCH_MODE_TYPE[];
  mission: SEARCH_MODE_TYPE[];
  launch: SEARCH_MODE_TYPE[];
  event: SEARCH_MODE_TYPE[];
  meetup: SEARCH_MODE_TYPE[];
  slide: SEARCH_MODE_TYPE[];
  image: SEARCH_MODE_TYPE[];
};

export const SEARCH_ITEMS: SEARCH_ITEM_TYPE = {
  mission: [
    {
      label: '日時',
      value: 'datetime',
      type: 'datetime',
      enabled: false,
    },
    {
      label: 'ミッション名',
      value: 'name',
      type: 'string',
      enabled: false,
    },
    {
      label: 'ロケット',
      value: 'rocket',
      type: 'string',
      enabled: false,
    },
    {
      label: '発射場',
      value: 'site',
      type: 'string',
      enabled: false,
    },
    {
      label: '打ち上げ事業者',
      value: 'provider',
      type: 'string',
      enabled: false,
    },
    {
      label: '概要',
      value: 'overview',
      type: 'string',
      enabled: false,
    },
  ],
  launch: [
    {
      label: '日時',
      value: 'datetime',
      type: 'datetime',
      enabled: false,
    },
    {
      label: 'ミッション名',
      value: 'name',
      type: 'string',
      enabled: false,
    },
    {
      label: 'ロケット',
      value: 'rocket',
      type: 'string',
      enabled: false,
    },
    {
      label: '発射場',
      value: 'site',
      type: 'string',
      enabled: false,
    },
    {
      label: '打ち上げ事業者',
      value: 'provider',
      type: 'string',
      enabled: false,
    },
    {
      label: '概要',
      value: 'overview',
      type: 'string',
      enabled: false,
    },
  ],
  event: [
    {
      label: '日時',
      value: 'datetime',
      type: 'datetime',
      enabled: false,
    },
    {
      label: 'ミッション名',
      value: 'name',
      type: 'string',
      enabled: false,
    },
  ],
  meetup: [
    {
      label: '日時',
      value: 'datetime',
      type: 'datetime',
      enabled: false,
    },
    {
      label: '集会タイトル',
      value: 'title',
      type: 'string',
      enabled: false,
    },
    {
      label: 'JOIN先',
      value: 'user',
      type: 'string',
      enabled: false,
    },
  ],
  slide: [
    {
      label: '更新日時',
      value: 'updated-at',
      type: 'datetime',
      enabled: false,
    },
    {
      label: '作成日時',
      value: 'created-at',
      type: 'datetime',
      enabled: false,
    },
    {
      label: 'タイトル',
      value: 'name',
      type: 'string',
      enabled: false,
    },
    {
      label: '作成者',
      value: 'user',
      type: 'string',
      enabled: false,
    },
  ],
  image: [
    {
      label: 'タイトル',
      value: 'title',
      type: 'string',
      enabled: false,
    },
    {
      label: '更新日時',
      value: 'updated_at',
      type: 'datetime',
      enabled: false,
    },
    {
      label: '作成日時',
      value: 'created_at',
      type: 'datetime',
      enabled: false,
    },
    {
      label: 'クレジット',
      value: 'credit',
      type: 'string',
      enabled: false,
    },
    {
      label: '作成者',
      value: 'user',
      type: 'string',
      enabled: false,
    },
    {
      label: '作成者',
      value: 'user',
      type: 'string',
      enabled: false,
    },
  ],
};

type DEFAULT_QUERY_TYPE = {
  [key: string]: () => { key: string; value: string }[];
  mission: () => { key: string; value: string }[];
  launch: () => { key: string; value: string }[];
  event: () => { key: string; value: string }[];
  meetup: () => { key: string; value: string }[];
  slide: () => { key: string; value: string }[];
  task: () => { key: string; value: string }[];
  image: () => { key: string; value: string }[];
};

export const DEFAULT_QUERY: DEFAULT_QUERY_TYPE = {
  mission: () => [
    {
      key: 'datetime',
      value: TimeRange.fromMode(new Date(), 'WEEK_TEIKI')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  launch: () => [
    {
      key: 'datetime',
      value: TimeRange.fromMode(new Date(), 'WEEK_TEIKI')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  event: () => [
    {
      key: 'datetime',
      value: TimeRange.fromMode(new Date(), 'WEEK_TEIKI')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  meetup: () => [
    {
      key: 'datetime',
      value: TimeRange.fromMode(new Date(), 'WEEK_TEIKI')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  slide: () => [
    {
      key: 'updated-at',
      value: TimeRange.fromMode(new Date(), 'MONTH')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  task: () => [
    {
      key: 'state',
      value: 'a00*',
    },
    {
      key: 'limit',
      value: '1000',
    },
  ],
  image: () => [
    {
      key: 'updated_at',
      value: TimeRange.fromMode(new Date(), 'MONTH')
        .toString('datetime')
        .replace('datetime=', ''),
    },
    {
      key: 'title',
      value: '*',
    },
    {
      key: 'limit',
      value: '100000',
    },
  ],
};

export const getDefaultQuery = (type: string) => {
  if (DEFAULT_QUERY.hasOwnProperty(type)) {
    // 値が関数なら実行
    if (typeof DEFAULT_QUERY[type] === 'function') return DEFAULT_QUERY[type]();
  }
  return [
    {
      key: 'limit',
      value: 100,
    },
  ];
};

export const getSearchItems = (type: string) => {
  if (SEARCH_ITEMS.hasOwnProperty(type)) {
    return SEARCH_ITEMS[type];
  }
  return [];
};
