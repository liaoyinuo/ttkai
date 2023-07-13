/** 封禁后提示文案 */
export const SEAL_TEXT = '你已经被关进小黑屋中, 请反思后再试';

/** 封禁用户释放时间 */
export const SEAL_USER_TIMEOUT = 1000 * 60 * 10; // 10分钟

/** 封禁ip释放时间 */
export const SEAL_IP_TIMEOUT = 1000 * 60 * 60 * 6; // 6小时

/** 透明图 */
export const TRANSPARENT_IMAGE =
    'data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==';

export const XK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiASURBVEhLxVdrbBTXFf7u7Mzs7KzX68f6CdhgcGKDzSO0QEh4NDwCQlWahoS2kIYUkbRKRR9S0helQSQqCqQqUivaqrQkDY0gUJqSFKni5biQAAUb8wjGQBYMxvbaXu97d549d7ybkACh//ppju7svffc755zzzl3Fv8vsGx7VxzbOFsa5b1Wr+ZnGgSZNQoSSsBsATpiRhJX0jHpUFN/fetX17xrZVU+F3cl/nD9uILK4v7lnkJrhRiwa1lxvhv5IwE5QNoioPcDsQ6gPwItJNwwwtafWnrq1j/403/Hs0vcFnck3r1uIXvA1/JEQXlqnTRCrUX1AqBoPhE2AkJBdhbB5gbagHEeiB4EgttgBQe1TBfWqd+LvTQ06Vbclvg/axvU+tKrP1eG4QdC7Xg3Rq4CpCoaIQuZNNTCxacSzCGxNWoNatNA71vA6a1If8T2n+6t+cqUX7TdYv0txEfX1HsaSq5uVkfaT2HCMqB8Hs1y00iWkMlDLQQSDm4xJ9SpzQn9jl8BWjdAP9vfsXfwoXGPrN7LBz7GLcSpje7NSo38bUx4jEinEQdZxs/SIcuR346YhLc5YoO8EI8CJ9dDOx8/vKN/zown1+2lMxlCzl8OutYWPOkfbqxm9TMkBCbQKLlNIMHNkiISEiRJEiTkRZt7kgv/TWLTmEmtRZvwjoQr1lpVmeyObNiX/oAmOPjY4n/9ZKJ6f2n7ibyxZXW4dyHgIZfKtC+JxMWt5nvMCbc2p8qN4FbnzprEItGpT6M2TdZ3tcE48b7d3lVa1fDy9WtcK+cvNCoXH/X6zToUjSY3RUhx4BMxKGWsEC3Kpfczkuuj1uobmqtldRzdMFldBjGQxwJK5GdZuiFX73xxARsjX/6NWllQjaJy6jWgZ+I42dSBg7vOIFApwufnM29yt+PqrHDXWtSnJxENhfHmq4cx0BnCMNJz8TPXaEzTIIRDo+dMmfjr15tvmI7FtelTlYJkTbFlDynHEe7qxdZfHcW+ty9h+Ngi+Itpkk5e0LgM0jsJt4QLf3f6uZciyM/Xcc+UUhxt6sIrP2pG+Fq3syZkFUwRCkvNa3M4p0Ms2akvMNF224whHY1h+2vt8BS68Z01DZg92wMvI0WNgoUvoMfonYQ84gh/d/ppnM9JRzF9qowXXh2PCTNKsemVM9CiETr6DGxJRJ4Qm8k5eV5AsLQaW2BUhDS0nkhBp3h5bEkF+q/24UhLBKGQDrfXhdqxXkx4oAiih6t9ElxG2kRHWxSXz8Yw0KtBoqC8b1IeFi0oRKQniT3/6MKj8/NhEYcFi+ptltiEXcZj0jI0hKIMjz9Riaa3O3H0eBSKZIM2Cos2c+FUFO/u6MXz68fAk89zmnQperdtuoLghQQ8VGd42vO5Z2nDtTUDWLJsBHbt7nPWNqm8mrZdxvWGiE3qd7LAxNwvVcCUZMSZioVfK0bVGC88PhEaEYS6Uwj1GIjGGTwq1+R2C6ieVIqJD0kor1SgeFzQkiZuXEmi43wCwWgA33iEwmGwD6Zhcy7HVTniPoOCrz8l4+/+H2K4qGDu5LXwl7mpNPMcpUEFKKmh3B5DL1yVFuGtYDPMnu4bMtOiuVxkG0UjRJS5FJwsW4ntkQCeSa2EQMvoJqO8yxJnTPFSa2oU9uT9FsunzcSuv72Bpu3AMF8nhlUwVFWrGFmjorBUhuh2US2hmMxVACK0TYsyxkBfj4Yb19IIXkqgKyThesiGviSBZ765DM/t/SeWx5diuHX5HFdziBfnbxEr6u+zN86vYT6J4QYVm/mzHkbdvKcR7epA59VzaDkWRLQnCDPJi0ScLDVg22QlfRFAVOkJQCkoR3EllYKZDagoqULhe9vQxL1C8uKiRqxg+1Hw/h+oEKwGK/jl0dFixYhjv/tyRVFRPqUWdW/66x8x68jLmLpqN1SPAq+q0pmqUNxuCILgEFrcpRTRjJHplIb8t6bpSCYTiMdiiA32o337s2ie9ByeWvxdmBQTccq2Z/f0JpOdwftdZSs3vBAIFM6rDgjg59wzYCHYdgCPBw7ivV1vIRLqQoJy2yUrVAPy4BIlCORqkeq3SySHEamu6xgMdeP6hTYETzWj/dCbuLh/M6Y3RnAyMxZWxSyqdwwfZYDutEcyJI/J6t7JvJHUsLS0TEYFbb4zFMfiE9/Cqnua8M6RFIyMRtbYSGdsimyBPOuDpPqdDfBA0rQM5XGUbsUE3BRUiltwYs9XoGDhdA9eP9OADY07cW+FH3Tk6KWaIAvWbja52ZoT7k/tS6RM6KRRrnfjtXNTKaBsCOTm/ccTDjl5+H8CxRlkxY2HH/TBjKVwlb4HVo7Zh8vyaLrNGVS3K1Ncri7nm8P0Fnt+PGysEPTM4I8PzvOOM48v9ZbQN12xArdfxQEiH+xLOIXk80D3APyFCmZPo/RKphEbyCDWm8Z1u+rA83NPn6IrdoTbI+6gErbTIc7B3gqWML3Ch63GX9Q86+tqsRuqT4KXPiwvhwScbY8jFU9Dosino3XAY4xCDJIiYXy9D6NKiDOaRiphIEHESTpm3XAtnvrFZJAtdy5vB58i5uDkSV0R2lqwOc9nrlQLJCheEW6qSIrPg3BKQDhmIUMFnX9gqqoLxX4BKtPprDPIUN3OEGkqQsSDZrNLZEsmTdK7bybluIWYg5NTxrDjLeoigZlb8vJRwi8JWXFBlCjAXFQoucn0OKll0kVBJVXP0IaSRBi1o5mU/ZLt9f9+2ri+mPD0p0k5bkvMwcmpYZotCx8ctr+veNgKt2zVcctFmYh5VSDwiOc1WMvYVipJpdfAn3V4tsyaGrnEl/mspTnckTiH3AboYU0ni8azdHyKy2WPZozRXwlbsm0WN23hIjngkFqkdEyuDdPlfGfCHO5KfDOym+C4nZ5DdDfCIQD/BSGo1pTx7uI0AAAAAElFTkSuQmCC';

/** 加密salt位数 */
export const SALT_ROUNDS = 10;

export const MB = 1024 * 1024;

export const NAME_REGEXP = /^([0-9a-zA-Z]{1,2}|[\u4e00-\u9eff]|[\u3040-\u309Fー]|[\u30A0-\u30FF]){1,8}$/;
