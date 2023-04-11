export const TagPercent = ({
  background = '#B141E0',
  color = '#fff',
}: ITag) => {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M53 53L0 0H45C49.4183 0 53 3.58172 53 8V53Z" fill={background} />
      <path
        d="M35.5936 6.31883C36.483 5.89372 37.517 5.89372 38.4064 6.31883C38.7928 6.50351 39.1468 6.80551 39.6371 7.22367C39.6625 7.24538 39.6883 7.2674 39.7146 7.28973C39.9526 7.49262 40.0276 7.555 40.1035 7.60585C40.2965 7.73519 40.5132 7.82495 40.7411 7.86995C40.8307 7.88764 40.9278 7.89654 41.2396 7.92143C41.2739 7.92417 41.3078 7.92685 41.3411 7.92949C41.9834 7.98046 42.4473 8.01727 42.8511 8.15991C43.7807 8.48822 44.5118 9.21935 44.8401 10.1489C44.9827 10.5527 45.0195 11.0166 45.0705 11.6589C45.0732 11.6922 45.0758 11.7261 45.0786 11.7604C45.1035 12.0722 45.1124 12.1693 45.1301 12.2589C45.175 12.4868 45.2648 12.7036 45.3941 12.8965C45.445 12.9724 45.5074 13.0474 45.7103 13.2854C45.7326 13.3117 45.7546 13.3375 45.7763 13.3629C46.1945 13.8532 46.4965 14.2072 46.6812 14.5936C47.1063 15.483 47.1063 16.517 46.6812 17.4064C46.4965 17.7928 46.1945 18.1468 45.7764 18.6371C45.7546 18.6625 45.7326 18.6883 45.7103 18.7146C45.5074 18.9526 45.445 19.0276 45.3941 19.1035C45.2648 19.2965 45.175 19.5132 45.1301 19.7411C45.1124 19.8307 45.1035 19.9278 45.0786 20.2396C45.0758 20.2739 45.0732 20.3078 45.0705 20.3411C45.0195 20.9834 44.9827 21.4473 44.8401 21.8511C44.5118 22.7807 43.7807 23.5118 42.8511 23.8401C42.4473 23.9827 41.9834 24.0195 41.3411 24.0705C41.3078 24.0732 41.2739 24.0758 41.2396 24.0786C40.9278 24.1035 40.8307 24.1124 40.7411 24.1301C40.5132 24.175 40.2965 24.2648 40.1035 24.3941C40.0276 24.445 39.9526 24.5074 39.7146 24.7103C39.6883 24.7326 39.6625 24.7546 39.6371 24.7763C39.1468 25.1945 38.7928 25.4965 38.4064 25.6812C37.517 26.1063 36.483 26.1063 35.5936 25.6812C35.2072 25.4965 34.8531 25.1945 34.3629 24.7763C34.3375 24.7546 34.3116 24.7326 34.2854 24.7103C34.0474 24.5074 33.9724 24.445 33.8965 24.3941C33.7036 24.2648 33.4868 24.175 33.2589 24.1301C33.1693 24.1124 33.0722 24.1035 32.7604 24.0786C32.7261 24.0758 32.6922 24.0732 32.6589 24.0705C32.0166 24.0195 31.5527 23.9827 31.1489 23.8401C30.2193 23.5118 29.4882 22.7807 29.1599 21.8511C29.0173 21.4473 28.9805 20.9834 28.9295 20.3411C28.9268 20.3078 28.9242 20.2739 28.9214 20.2396C28.8965 19.9278 28.8876 19.8307 28.8699 19.7411C28.825 19.5132 28.7352 19.2965 28.6059 19.1035C28.555 19.0276 28.4926 18.9526 28.2897 18.7146C28.2674 18.6884 28.2454 18.6625 28.2237 18.6371C27.8055 18.1468 27.5035 17.7928 27.3188 17.4064C26.8937 16.517 26.8937 15.483 27.3188 14.5936C27.5035 14.2072 27.8055 13.8532 28.2237 13.3629C28.2454 13.3375 28.2674 13.3117 28.2897 13.2854C28.4926 13.0474 28.555 12.9724 28.6059 12.8965C28.7352 12.7036 28.825 12.4868 28.8699 12.2589C28.8876 12.1693 28.8965 12.0722 28.9214 11.7604C28.9242 11.7261 28.9268 11.6922 28.9295 11.6589C28.9805 11.0166 29.0173 10.5527 29.1599 10.1489C29.4882 9.21935 30.2193 8.48822 31.1489 8.15991C31.5527 8.01727 32.0166 7.98046 32.6589 7.92949C32.6922 7.92685 32.7261 7.92417 32.7604 7.92143C33.0722 7.89654 33.1693 7.88764 33.2589 7.86995C33.4868 7.82495 33.7036 7.73519 33.8965 7.60585C33.9724 7.555 34.0474 7.49262 34.2854 7.28973C34.3117 7.26739 34.3375 7.24538 34.3629 7.22367C34.8532 6.80551 35.2072 6.50351 35.5936 6.31883ZM37.7573 7.6769C37.2784 7.44799 36.7216 7.44799 36.2427 7.6769C36.0576 7.76539 35.8624 7.92352 35.2618 8.43537C35.2519 8.44378 35.2422 8.45207 35.2326 8.46026C35.0354 8.6283 34.8916 8.75097 34.7346 8.8562C34.3762 9.09639 33.9737 9.2631 33.5505 9.34666C33.3651 9.38327 33.1766 9.39827 32.9184 9.41883C32.9058 9.41983 32.893 9.42084 32.8801 9.42187C32.0935 9.48465 31.8437 9.51084 31.6502 9.57919C31.1497 9.75597 30.756 10.1497 30.5792 10.6502C30.5108 10.8437 30.4846 11.0935 30.4219 11.8801C30.4208 11.893 30.4198 11.9058 30.4188 11.9184C30.3983 12.1766 30.3833 12.3651 30.3467 12.5505C30.2631 12.9737 30.0964 13.3762 29.8562 13.7346C29.751 13.8916 29.6283 14.0354 29.4603 14.2326C29.4521 14.2422 29.4438 14.2519 29.4354 14.2618C28.9235 14.8624 28.7654 15.0576 28.6769 15.2427C28.448 15.7216 28.448 16.2784 28.6769 16.7573C28.7654 16.9424 28.9235 17.1376 29.4354 17.7382C29.4438 17.7481 29.4521 17.7578 29.4603 17.7674C29.6283 17.9646 29.751 18.1084 29.8562 18.2654C30.0964 18.6238 30.2631 19.0263 30.3467 19.4495C30.3833 19.6349 30.3983 19.8234 30.4188 20.0816C30.4198 20.0942 30.4208 20.107 30.4219 20.1199C30.4846 20.9065 30.5108 21.1563 30.5792 21.3498C30.756 21.8503 31.1497 22.244 31.6502 22.4208C31.8437 22.4892 32.0935 22.5154 32.8801 22.5781L32.9184 22.5812C33.1766 22.6017 33.3651 22.6167 33.5505 22.6533C33.9737 22.7369 34.3762 22.9036 34.7346 23.1438C34.8916 23.249 35.0354 23.3717 35.2326 23.5397L35.2618 23.5646C35.8624 24.0765 36.0576 24.2346 36.2427 24.3231C36.7216 24.552 37.2784 24.552 37.7573 24.3231C37.9424 24.2346 38.1376 24.0765 38.7382 23.5646L38.7675 23.5397C38.9646 23.3717 39.1084 23.249 39.2654 23.1438C39.6238 22.9036 40.0263 22.7369 40.4495 22.6533C40.6349 22.6167 40.8234 22.6017 41.0816 22.5812L41.1199 22.5781C41.9065 22.5154 42.1563 22.4892 42.3498 22.4208C42.8503 22.244 43.244 21.8503 43.4208 21.3498C43.4892 21.1563 43.5154 20.9065 43.5781 20.1199L43.5812 20.0816C43.6017 19.8234 43.6167 19.6349 43.6533 19.4495C43.7369 19.0263 43.9036 18.6238 44.1438 18.2654C44.249 18.1084 44.3717 17.9646 44.5397 17.7675L44.5646 17.7382C45.0765 17.1376 45.2346 16.9424 45.3231 16.7573C45.552 16.2784 45.552 15.7216 45.3231 15.2427C45.2346 15.0576 45.0765 14.8624 44.5646 14.2618L44.5397 14.2325C44.3717 14.0354 44.249 13.8916 44.1438 13.7346C43.9036 13.3762 43.7369 12.9737 43.6533 12.5505C43.6167 12.3651 43.6017 12.1766 43.5812 11.9184L43.5781 11.8801C43.5154 11.0935 43.4892 10.8437 43.4208 10.6502C43.244 10.1497 42.8503 9.75597 42.3498 9.57919C42.1563 9.51084 41.9065 9.48465 41.1199 9.42187C41.107 9.42084 41.0942 9.41983 41.0816 9.41883C40.8234 9.39827 40.6349 9.38327 40.4495 9.34666C40.0263 9.2631 39.6238 9.09639 39.2654 8.8562C39.1084 8.75097 38.9646 8.6283 38.7674 8.46025C38.7578 8.45207 38.7481 8.44377 38.7382 8.43537C38.1376 7.92352 37.9424 7.76539 37.7573 7.6769Z"
        fill={color}
      />
      <path
        d="M40.5426 12.4574C40.8365 12.7513 40.8365 13.2278 40.5426 13.5217L34.5217 19.5426C34.2278 19.8365 33.7513 19.8365 33.4574 19.5426C33.1635 19.2487 33.1635 18.7722 33.4574 18.4783L39.4783 12.4574C39.7722 12.1635 40.2487 12.1635 40.5426 12.4574Z"
        fill={color}
      />
      <path
        d="M40.5122 18.5087C40.5122 19.0629 40.0629 19.5122 39.5087 19.5122C38.9545 19.5122 38.5052 19.0629 38.5052 18.5087C38.5052 17.9545 38.9545 17.5052 39.5087 17.5052C40.0629 17.5052 40.5122 17.9545 40.5122 18.5087Z"
        fill={color}
      />
      <path
        d="M35.4948 13.4913C35.4948 14.0455 35.0455 14.4948 34.4913 14.4948C33.9371 14.4948 33.4878 14.0455 33.4878 13.4913C33.4878 12.9371 33.9371 12.4878 34.4913 12.4878C35.0455 12.4878 35.4948 12.9371 35.4948 13.4913Z"
        fill={color}
      />
    </svg>
  )
}

interface ITag {
  background?: string
  color?: string
}