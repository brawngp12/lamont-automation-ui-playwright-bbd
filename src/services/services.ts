//TODO: Written all services in this file or call API from here
import { type APIRequestContext } from '@playwright/test';
import { envToken } from '../config/env.config.ts';

// 1. Định nghĩa Interface cho dữ liệu trả về từ API
export interface responeStockInfo {
}

export class UserApiService {
  // Nhận request context được truyền từ Playwright/Step definition
  constructor(private request: APIRequestContext) {}
  /**
   * GET API để lấy thông tin stock MBB
   * @params symbol: string - Mã chứng khoán cần lấy thông tin
   * @params page: number - Trang dữ liệu cần lấy
   * @params pageSize: number - Số lượng bản ghi trên mỗi trang
   * @params fromDate: string - Ngày bắt đầu (định dạng dd/MM/yyyy)
   * @params toDate: string - Ngày kết thúc (định dạng dd/MM/yyyy)
   * @return Promise<responeStockInfo> - Trả về dữ liệu theo interface responeStockInfo
   */
  async getBoardMBB(): Promise<responeStockInfo> {
    const response = await this.request.get(`${envToken.baseUrl}/statistics/company/ssmi/stock-info`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: { 
        symbol: 'MBB',
        page:1,
        pageSize:1,
        fromDate:'23/08/2026',
        toDate:'23/09/2026'
      }
    });

    // console.log('Log Call API',envToken.baseUrl);

    // Verify StatusCode
    if (!response.ok()) {
      throw new Error(`[API Error] GET failed with status: ${response.status()}`);
    }

    // Parse response body ra dạng JSON theo Interface UserProfile
    const data: responeStockInfo = await response.json();
    return data;
  }
}