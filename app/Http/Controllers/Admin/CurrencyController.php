<?php
/**
 *  app/Http/Controllers/Admin/ProductController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Decentralized Healthcare <Decentralized Healthcare>
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Allocation;
use App\Models\Attribute;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Currency;
use App\Models\Customer;
use App\Models\Product;
use App\Models\ProductAttributeValue;
use App\Models\TokenSale;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\Eloquent\AllocationRepository;
use App\Repositories\Eloquent\AllocationValueRepository;
use App\Repositories\Eloquent\BlogRepository;
use App\Repositories\Eloquent\CurrencyRepository;
use App\Repositories\Eloquent\CustomerRepository;
use App\Repositories\Eloquent\ProductAttributeValueRepository;
use App\Repositories\Eloquent\TokenSaleLimitRepository;
use App\Repositories\Eloquent\TokenSaleRepository;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;
use ReflectionException;
use App\Repositories\Eloquent\AttributeRepository;
use function Symfony\Component\Translation\t;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{




    private $currencyRepository;


    public function __construct(
        CurrencyRepository $currencyRepository
    )
    {
        $this->currencyRepository = $currencyRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(ProductRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.currency.index', [
            'data' => $this->currencyRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $model = $this->currencyRepository->model;





        $url = locale_route('currency.store', [], false);
        $method = 'POST';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.currency.form', [
            'model' => $model,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(Request $request)
    {

        $request->validate([
            'code' => 'required|unique:currencies,code'
        ]);
        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);




        $model = $this->currencyRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images')) {
            $model = $this->currencyRepository->saveFiles($model->id, $request);
        }






        return redirect(locale_route('currency.index', $model->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Product $product)
    {
        return view('admin.pages.product.show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Currency $currency)
    {
        $url = locale_route('currency.update', $currency->id, false);
        $method = 'PUT';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.currency.form', [
            'model' => $currency,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(Request $request, string $locale, Currency $currency)
    {
        $request->validate([
            'code' => ['required', Rule::unique('currencies')->ignore($currency->id)],
        ]);
        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);

        $attributes = isset($saveData['attribute']) ? $saveData['attribute'] : [];
        unset($saveData['attribute']);


        //if(isset($saveData['verified_at'])){

        //dd($saveData);

        //dd($attributes);

        $this->currencyRepository->update($currency->id, $saveData);

        $this->currencyRepository->saveFiles($currency->id, $request);








        return redirect(locale_route('currency.index', $currency->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Currency $currency)
    {
        if (!$this->currencyRepository->delete($currency->id)) {
            return redirect(locale_route('currency.index', $currency->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('currency.index'))->with('success', __('admin.delete_message'));
    }
}
